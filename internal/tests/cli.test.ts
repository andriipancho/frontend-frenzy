import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { findRepositoryRoot } from "../challenge-schema/src/discovery.js";
import {
  readProgress,
  writeProgress,
  type ChallengeProgress,
  type ProgressFile,
} from "../progress/src/index.js";

const repositoryRoot = findRepositoryRoot();
const cliEntry = join(repositoryRoot, "dist", "packages", "cli", "src", "index.js");

const STARTER = `export function toLabel(value: string | number): string {
  return value.toUpperCase();
}
`;

const SOLUTION = `export function toLabel(value: string | number): string {
  return typeof value === "string" ? value.toUpperCase() : String(value);
}
`;

const TEST_FILE = `import { toLabel } from "./task.js";

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
type Expect<T extends true> = T;

export type Cases = [Expect<Equal<ReturnType<typeof toLabel>, string>>];

toLabel("ready");
toLabel(42);
`;

function metadata(id: string): string {
  return `${JSON.stringify(
    {
      id,
      title: `Fixture ${id}`,
      domain: "typescript",
      topic: "core",
      difficulty: "easy",
      topics: ["narrowing"],
      estimatedMinutes: 4,
      prerequisites: [],
      hints: ["Check the runtime type first.", "Use typeof.", "Handle each member separately."],
      validation: { type: "typescript" },
    },
    null,
    2,
  )}\n`;
}

/**
 * Builds a throwaway repository that `findRepositoryRoot` accepts, so the CLI runs
 * against fixtures instead of the real challenge bank and the developer's progress file.
 */
function createFixtureRepository(): string {
  const directory = mkdtempSync(join(tmpdir(), "frenzy-cli-"));
  writeFileSync(
    join(directory, "package.json"),
    `${JSON.stringify({ name: "frontend-frenzy", version: "0.0.0", private: true, type: "module" }, null, 2)}\n`,
    "utf8",
  );
  // The validator resolves tsc from the repository root it is given.
  symlinkSync(join(repositoryRoot, "node_modules"), join(directory, "node_modules"), "dir");

  for (const id of ["TS-CORE-001", "TS-CORE-002"]) {
    const challenge = join(directory, "challenges", "typescript", "01-core", `${id}-label-union`);
    mkdirSync(challenge, { recursive: true });
    writeFileSync(join(challenge, "meta.json"), metadata(id), "utf8");
    writeFileSync(join(challenge, "README.md"), `# ${id} — Label a union\n`, "utf8");
    writeFileSync(join(challenge, "task.ts"), STARTER, "utf8");
    writeFileSync(join(challenge, "test.ts"), TEST_FILE, "utf8");
  }
  return directory;
}

function taskPath(root: string, id: string): string {
  return join(root, "challenges", "typescript", "01-core", `${id}-label-union`, "task.ts");
}

interface CliResult {
  readonly status: number;
  readonly stdout: string;
  readonly stderr: string;
}

function runCli(root: string, ...args: string[]): CliResult {
  const result = spawnSync(process.execPath, [cliEntry, ...args], { cwd: root, encoding: "utf8" });
  return { status: result.status ?? -1, stdout: result.stdout ?? "", stderr: result.stderr ?? "" };
}

function stateOf(progress: ProgressFile, id: string): ChallengeProgress {
  const state = progress.challenges[id];
  assert.ok(state, `expected progress for ${id}`);
  return state;
}

test("the CLI drives a challenge from start to completion", async (t) => {
  const root = createFixtureRepository();
  t.after(() => rmSync(root, { recursive: true, force: true }));

  await t.test("start selects the first unsolved challenge", () => {
    const result = runCli(root, "start", "typescript");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /TS-CORE-001/);
    assert.match(result.stdout, /Progress: 0 \/ 2/);
  });

  await t.test("current reports the active challenge", () => {
    const result = runCli(root, "current");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /TS-CORE-001/);
  });

  await t.test("hint reveals one predefined hint at a time", () => {
    const first = runCli(root, "hint");
    assert.equal(first.status, 0, first.stderr);
    assert.match(first.stdout, /Hint 1\/3/);
    const second = runCli(root, "hint");
    assert.match(second.stdout, /Hint 2\/3/);
    assert.equal(stateOf(readProgress(root), "TS-CORE-001").hintsUsed, 2);
  });

  await t.test("check fails on the starter and records an attempt", () => {
    const result = runCli(root, "check");
    assert.equal(result.status, 1);
    assert.match(result.stdout, /✗ FAIL/);
    const state = stateOf(readProgress(root), "TS-CORE-001");
    assert.equal(state.attempts, 1);
    assert.equal(state.status, "started");
  });

  await t.test("--details surfaces the compiler output", () => {
    const result = runCli(root, "check", "--details");
    assert.equal(result.status, 1);
    assert.match(result.stdout, /error TS/);
    assert.equal(stateOf(readProgress(root), "TS-CORE-001").attempts, 2);
  });

  await t.test("check passes on a correct solution and schedules a review", () => {
    writeFileSync(taskPath(root, "TS-CORE-001"), SOLUTION, "utf8");
    const result = runCli(root, "check");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /✓ PASS/);
    const state = stateOf(readProgress(root), "TS-CORE-001");
    assert.equal(state.attempts, 3);
    assert.equal(state.status, "completed");
    assert.ok(state.completedAt);
    assert.equal(state.retention?.stage, 0);
    assert.equal(state.retention?.reviewCount, 0);
  });

  await t.test("re-checking a completed challenge records nothing", () => {
    const before = stateOf(readProgress(root), "TS-CORE-001");
    const result = runCli(root, "check");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /not recorded/);
    assert.deepEqual(stateOf(readProgress(root), "TS-CORE-001"), before);
  });

  await t.test("next advances to the following unsolved challenge", () => {
    const result = runCli(root, "next");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /TS-CORE-002/);
    assert.match(result.stdout, /Progress: 1 \/ 2/);
  });
});

test("retention reviews are counted separately from practice attempts", async (t) => {
  const root = createFixtureRepository();
  t.after(() => rmSync(root, { recursive: true, force: true }));

  writeFileSync(taskPath(root, "TS-CORE-001"), SOLUTION, "utf8");
  runCli(root, "start", "typescript");
  assert.equal(runCli(root, "check").status, 0);

  const scheduled = readProgress(root);
  const completed = stateOf(scheduled, "TS-CORE-001");
  assert.ok(completed.retention);
  completed.retention.dueAt = new Date(Date.now() - 60_000).toISOString();
  writeProgress(root, scheduled);
  const practiceAttempts = completed.attempts;
  const practiceSeconds = completed.elapsedSeconds;

  await t.test("retention selects the due challenge", () => {
    const result = runCli(root, "retention");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /TS-CORE-001/);
    assert.equal(readProgress(root).currentMode, "retention");
  });

  await t.test("a passed review advances the schedule without touching attempts", () => {
    const result = runCli(root, "check");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Review 1 recorded/);
    const state = stateOf(readProgress(root), "TS-CORE-001");
    assert.equal(state.retention?.reviewCount, 1);
    assert.equal(state.retention?.stage, 1);
    assert.equal(state.attempts, practiceAttempts);
    assert.equal(state.elapsedSeconds, practiceSeconds);
  });

  await t.test("a recorded review is not replayed by a repeated check", () => {
    const result = runCli(root, "check");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /not recorded/);
    const state = stateOf(readProgress(root), "TS-CORE-001");
    assert.equal(state.retention?.reviewCount, 1);
    assert.equal(state.retention?.stage, 1);
  });

  await t.test("stats exclude reviews from accuracy and failed attempts", () => {
    assert.equal(runCli(root, "stats", "--export").status, 0);
    const snapshot = JSON.parse(readFileSync(join(root, "stats", "typescript.json"), "utf8")) as Record<
      string,
      unknown
    >;
    assert.equal(snapshot.solved, 1);
    assert.equal(snapshot.total, 2);
    assert.equal(snapshot.failedAttempts, 0);
    assert.equal(snapshot.accuracy, 100);
    assert.equal(snapshot.retentionReviews, 1);
  });
});
