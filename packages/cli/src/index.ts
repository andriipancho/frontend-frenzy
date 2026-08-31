#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import {
  discoverChallenges,
  findRepositoryRoot,
  type Challenge,
} from "../../../internal/challenge-schema/src/discovery.js";
import {
  elapsedSince,
  readProgress,
  startChallenge,
  writeProgress,
  type ActiveSession,
  type ProgressFile,
} from "../../../internal/progress/src/index.js";
import {
  recordReview,
  scheduleFirstReview,
  selectDueChallenge,
} from "../../../internal/retention/src/index.js";
import { validateTypeScriptChallenge } from "../../../internal/validation/src/typescript.js";

const root = findRepositoryRoot();
const challenges = discoverChallenges(root);

function titleCase(value: string): string {
  if (value === "typescript") return "TypeScript";
  return value
    .split("-")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

function formatDuration(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function challengeById(id: string | undefined): Challenge | undefined {
  return challenges.find((challenge) => challenge.metadata.id === id);
}

function matchesSession(challenge: Challenge, session: ActiveSession): boolean {
  return (
    challenge.metadata.domain === session.domain &&
    (!session.topic || challenge.metadata.topic === session.topic)
  );
}

function parseSession(value: string): ActiveSession {
  const [domain, rawTopic, ...extra] = value.split("/");
  if (!domain || extra.length > 0) throw new Error("Use DOMAIN or DOMAIN/TOPIC, for example typescript/generics.");
  if (!challenges.some((challenge) => challenge.metadata.domain === domain)) {
    throw new Error(`Unknown domain: ${domain}`);
  }
  if (!rawTopic) return { domain };
  const topic = rawTopic.replace(/^\d+-/, "");
  if (!challenges.some((challenge) => challenge.metadata.domain === domain && challenge.metadata.topic === topic)) {
    throw new Error(`Unknown or empty topic: ${rawTopic}`);
  }
  return { domain, topic };
}

function showChallenge(challenge: Challenge, progress: ProgressFile): void {
  const sessionChallenges = challenges.filter((candidate) => matchesSession(candidate, progress.activeSession));
  const solved = sessionChallenges.filter(
    (candidate) => progress.challenges[candidate.metadata.id]?.status === "completed",
  ).length;
  console.log(
    [
      `🔥 ${challenge.metadata.id}`,
      challenge.metadata.title,
      "",
      `Difficulty: ${titleCase(challenge.metadata.difficulty)}`,
      `Estimated: ${challenge.metadata.estimatedMinutes} min`,
      `Progress: ${solved} / ${sessionChallenges.length}`,
      "",
      "File:",
      challenge.relativeDirectory,
    ].join("\n"),
  );
}

function selectNext(progress: ProgressFile): Challenge | undefined {
  const current = challengeById(progress.currentChallengeId);
  if (current && progress.currentMode === "practice" && progress.challenges[current.metadata.id]?.status !== "completed") {
    return current;
  }
  return challenges.find(
    (challenge) =>
      matchesSession(challenge, progress.activeSession) &&
      progress.challenges[challenge.metadata.id]?.status !== "completed",
  );
}

function commandStart(value: string | undefined): void {
  if (!value) throw new Error("Missing domain. Try: frenzy start typescript");
  const progress = readProgress(root);
  progress.activeSession = parseSession(value);
  delete progress.currentChallengeId;
  delete progress.currentMode;
  const challenge = selectNext(progress);
  if (!challenge) {
    writeProgress(root, progress);
    console.log("Session complete. No unsolved challenges remain.");
    return;
  }
  startChallenge(progress, challenge.metadata.id, new Date());
  writeProgress(root, progress);
  showChallenge(challenge, progress);
}

function commandNext(): void {
  const progress = readProgress(root);
  const challenge = selectNext(progress);
  if (!challenge) {
    console.log("No unsolved challenges in the active session.");
    return;
  }
  startChallenge(progress, challenge.metadata.id, new Date());
  writeProgress(root, progress);
  showChallenge(challenge, progress);
}

function commandCurrent(): void {
  const progress = readProgress(root);
  const challenge = challengeById(progress.currentChallengeId);
  if (!challenge) {
    console.log("No active challenge. Run frenzy start typescript.");
    return;
  }
  showChallenge(challenge, progress);
}

function commandHint(): void {
  const progress = readProgress(root);
  const challenge = challengeById(progress.currentChallengeId);
  if (!challenge) throw new Error("No active challenge. Run frenzy start first.");
  const state = progress.challenges[challenge.metadata.id];
  if (!state) throw new Error("Active challenge has no progress state.");
  const nextHint = Math.min(state.hintsUsed, challenge.metadata.hints.length - 1);
  if (state.hintsUsed < challenge.metadata.hints.length) state.hintsUsed += 1;
  writeProgress(root, progress);
  console.log(`Hint ${nextHint + 1}/${challenge.metadata.hints.length}:\n${challenge.metadata.hints[nextHint]}`);
}

function commandCheck(details: boolean): void {
  const progress = readProgress(root);
  const challenge = challengeById(progress.currentChallengeId);
  if (!challenge) throw new Error("No active challenge. Run frenzy start first.");
  const state = progress.challenges[challenge.metadata.id];
  if (!state) throw new Error("Active challenge has no progress state.");

  const now = new Date();
  const result = validateTypeScriptChallenge(root, challenge);
  const review = progress.currentMode === "retention" ? state.retention : undefined;

  // Re-checking a completed challenge outside an open review reports the result
  // without recording another attempt, more elapsed time, or another review.
  if (!review && state.status === "completed") {
    console.log(`${result.passed ? "✓ PASS" : "✗ FAIL"} (already completed, not recorded)`);
    if (details && result.output) console.log(`\n${result.output}`);
    if (!result.passed) process.exitCode = 1;
    return;
  }

  if (review) {
    // Reviews are counted by the retention state, never as practice attempts.
    recordReview(review, result.passed, now);
    // The review is consumed, so a repeated check cannot advance the schedule again.
    progress.currentMode = "practice";
  } else {
    state.attempts += 1;
    state.elapsedSeconds += elapsedSince(state.startedAt, now);
    if (result.passed) {
      state.status = "completed";
      state.completedAt = now.toISOString();
      state.retention ??= scheduleFirstReview(now);
    } else {
      state.startedAt = now.toISOString();
    }
  }
  writeProgress(root, progress);

  if (!result.passed) {
    console.log("✗ FAIL\n\nTypeScript validation failed.\nRun with --details to show compiler output.");
    if (details && result.output) console.log(`\n${result.output}`);
    if (review) console.log(`\nReview ${review.reviewCount} failed. Due again ${review.dueAt.slice(0, 10)}.`);
    process.exitCode = 1;
    return;
  }

  if (review) {
    console.log(`✓ PASS\nReview ${review.reviewCount} recorded. Next due ${review.dueAt.slice(0, 10)}.`);
    return;
  }
  console.log(`✓ PASS\nTime: ${formatDuration(state.elapsedSeconds)}\nHints: ${state.hintsUsed}`);
}

interface StatsSnapshot {
  domain: string;
  topic?: string;
  total: number;
  solved: number;
  noHints: number;
  withHints: number;
  failedAttempts: number;
  accuracy: number;
  averageSeconds: number;
  totalSeconds: number;
  retentionReviews: number;
}

function collectStats(progress: ProgressFile): StatsSnapshot {
  const selected = challenges.filter((challenge) => matchesSession(challenge, progress.activeSession));
  const states = selected.flatMap((challenge) => {
    const state = progress.challenges[challenge.metadata.id];
    return state ? [state] : [];
  });
  const completed = states.filter((state) => state.status === "completed");
  const attempts = states.reduce((sum, state) => sum + state.attempts, 0);
  const failedAttempts = states.reduce((sum, state) => sum + Math.max(0, state.attempts - (state.status === "completed" ? 1 : 0)), 0);
  const totalSeconds = completed.reduce((sum, state) => sum + state.elapsedSeconds, 0);
  const snapshot: StatsSnapshot = {
    domain: progress.activeSession.domain,
    total: selected.length,
    solved: completed.length,
    noHints: completed.filter((state) => state.hintsUsed === 0).length,
    withHints: completed.filter((state) => state.hintsUsed > 0).length,
    failedAttempts,
    accuracy: attempts === 0 ? 0 : Math.round((completed.length / attempts) * 100),
    averageSeconds: completed.length === 0 ? 0 : Math.round(totalSeconds / completed.length),
    totalSeconds,
    retentionReviews: states.reduce((sum, state) => sum + (state.retention?.reviewCount ?? 0), 0),
  };
  if (progress.activeSession.topic) snapshot.topic = progress.activeSession.topic;
  return snapshot;
}

function commandStats(exportSnapshot: boolean): void {
  const progress = readProgress(root);
  const stats = collectStats(progress);
  if (exportSnapshot) {
    const directory = join(root, "stats");
    mkdirSync(directory, { recursive: true });
    const path = join(directory, `${stats.domain}.json`);
    writeFileSync(path, `${JSON.stringify(stats, null, 2)}\n`, "utf8");
    console.log(`Exported public-safe stats to stats/${stats.domain}.json`);
    return;
  }
  const scope = stats.topic ? `${titleCase(stats.domain)} / ${titleCase(stats.topic)}` : titleCase(stats.domain);
  console.log(
    [
      scope,
      "",
      `Solved          ${stats.solved} / ${stats.total}`,
      `No hints        ${stats.noHints}`,
      `With hints      ${stats.withHints}`,
      `Failed attempts ${stats.failedAttempts}`,
      `Accuracy        ${stats.accuracy}%`,
      `Avg time        ${formatDuration(stats.averageSeconds)}`,
      `Total time      ${formatDuration(stats.totalSeconds)}`,
      `Reviews         ${stats.retentionReviews}`,
    ].join("\n"),
  );
}

function commandTopics(): void {
  const progress = readProgress(root);
  const topics = new Map<string, Challenge[]>();
  for (const challenge of challenges) {
    const key = `${challenge.metadata.domain}/${challenge.metadata.topic}`;
    topics.set(key, [...(topics.get(key) ?? []), challenge]);
  }
  for (const [topic, topicChallenges] of topics) {
    const solved = topicChallenges.filter(
      (challenge) => progress.challenges[challenge.metadata.id]?.status === "completed",
    ).length;
    console.log(`${topic.padEnd(43)} ${String(solved).padStart(2)} / ${topicChallenges.length}`);
  }
}

function commandRetention(): void {
  const progress = readProgress(root);
  const challenge = selectDueChallenge(challenges, progress, new Date());
  if (!challenge) {
    console.log("No retention challenges are due.");
    return;
  }
  progress.activeSession = { domain: challenge.metadata.domain, topic: challenge.metadata.topic };
  startChallenge(progress, challenge.metadata.id, new Date(), "retention");
  writeProgress(root, progress);
  showChallenge(challenge, progress);
}

function printHelp(): void {
  console.log(`Frontend Frenzy\n\nCommands:\n  frenzy start <domain[/topic]>\n  frenzy next\n  frenzy current\n  frenzy check [--details]\n  frenzy hint\n  frenzy stats [--export]\n  frenzy topics\n  frenzy retention`);
}

function main(args: readonly string[]): void {
  const [command, value] = args;
  switch (command) {
    case "start": commandStart(value); break;
    case "next": commandNext(); break;
    case "current": commandCurrent(); break;
    case "check": commandCheck(args.includes("--details")); break;
    case "hint": commandHint(); break;
    case "stats": commandStats(args.includes("--export")); break;
    case "topics": commandTopics(); break;
    case "retention": commandRetention(); break;
    case "help":
    case "--help":
    case "-h":
    case undefined: printHelp(); break;
    default: throw new Error(`Unknown command: ${command}`);
  }
}

try {
  main(process.argv.slice(2));
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
