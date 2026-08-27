import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export interface RetentionState {
  stage: number;
  dueAt: string;
  reviewCount: number;
  lastResult?: "passed" | "failed";
}

export interface ChallengeProgress {
  status: "started" | "completed";
  startedAt: string;
  completedAt?: string;
  attempts: number;
  hintsUsed: number;
  elapsedSeconds: number;
  retention?: RetentionState;
}

export interface ActiveSession {
  domain: string;
  topic?: string;
}

export interface ProgressFile {
  version: 1;
  activeSession: ActiveSession;
  currentChallengeId?: string;
  currentMode?: "practice" | "retention";
  challenges: Record<string, ChallengeProgress>;
}

export function createProgress(): ProgressFile {
  return {
    version: 1,
    activeSession: { domain: "typescript" },
    challenges: {},
  };
}

export function progressPath(root: string): string {
  return join(root, ".frenzy", "progress.json");
}

export function readProgress(root: string): ProgressFile {
  const path = progressPath(root);
  if (!existsSync(path)) return createProgress();
  const value = JSON.parse(readFileSync(path, "utf8")) as unknown;
  if (typeof value !== "object" || value === null || (value as { version?: unknown }).version !== 1) {
    throw new Error(`Unsupported or invalid progress file: ${path}`);
  }
  return value as ProgressFile;
}

export function writeProgress(root: string, progress: ProgressFile): void {
  const path = progressPath(root);
  mkdirSync(dirname(path), { recursive: true });
  const temporaryPath = `${path}.tmp`;
  writeFileSync(temporaryPath, `${JSON.stringify(progress, null, 2)}\n`, "utf8");
  renameSync(temporaryPath, path);
}

export function startChallenge(
  progress: ProgressFile,
  challengeId: string,
  now: Date,
  mode: "practice" | "retention" = "practice",
): ChallengeProgress {
  const existing = progress.challenges[challengeId];
  if (!existing) {
    progress.challenges[challengeId] = {
      status: "started",
      startedAt: now.toISOString(),
      attempts: 0,
      hintsUsed: 0,
      elapsedSeconds: 0,
    };
  } else if (mode === "retention") {
    existing.startedAt = now.toISOString();
  }
  progress.currentChallengeId = challengeId;
  progress.currentMode = mode;
  return progress.challenges[challengeId] as ChallengeProgress;
}

export function elapsedSince(startedAt: string, now: Date): number {
  return Math.max(0, Math.round((now.getTime() - new Date(startedAt).getTime()) / 1000));
}
