import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
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

function metadata(id: string, domain = "typescript", topic = "core"): string {
  return `${JSON.stringify(
    {
      id,
      title: `Fixture ${id}`,
      domain,
      topic,
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

/** Makes the CLI believe it is running on a different machine. */
function useDevice(root: string, name: string): void {
  mkdirSync(join(root, ".frenzy"), { recursive: true });
  writeFileSync(join(root, ".frenzy", "device"), `${name}\n`, "utf8");
}

test("progress recorded on another machine is merged, not restarted", async (t) => {
  const root = createFixtureRepository();
  t.after(() => rmSync(root, { recursive: true, force: true }));

  // The other machine solves the first challenge and pushes both its shard and
  // its solution; this machine then picks the work up.
  useDevice(root, "desktop");
  writeFileSync(taskPath(root, "TS-CORE-001"), SOLUTION, "utf8");
  runCli(root, "start", "typescript");
  assert.equal(runCli(root, "check").status, 0);
  const desktopProgress = readProgress(root, "desktop");
  const desktop = stateOf(desktopProgress, "TS-CORE-001");
  assert.ok(desktop.retention);
  desktop.retention.dueAt = new Date(Date.now() - 60_000).toISOString();
  writeProgress(root, desktopProgress, "desktop");

  useDevice(root, "laptop");

  await t.test("each machine writes only its own shard", () => {
    assert.ok(existsSync(join(root, ".frenzy", "progress.desktop.json")));
    runCli(root, "start", "typescript");
    assert.ok(existsSync(join(root, ".frenzy", "progress.laptop.json")));
    assert.equal(stateOf(readProgress(root, "desktop"), "TS-CORE-001").attempts, desktop.attempts);
  });

  await t.test("a challenge solved elsewhere is not offered again", () => {
    const result = runCli(root, "start", "typescript");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /TS-CORE-002/);
    assert.match(result.stdout, /Progress: 1 \/ 2/);
  });

  await t.test("devices lists every machine that recorded work", () => {
    const result = runCli(root, "devices");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /desktop\s+1 completed/);
    assert.match(result.stdout, /laptop/);
  });

  await t.test("a review continues the other machine's schedule", () => {
    assert.equal(runCli(root, "retention").status, 0);
    const result = runCli(root, "check");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Review 1 recorded/);

    const laptop = stateOf(readProgress(root, "laptop"), "TS-CORE-001");
    assert.equal(laptop.retention?.reviewCount, 1, "the review advances the adopted schedule");
    assert.equal(laptop.retention?.stage, 1);
    assert.equal(laptop.attempts, 0, "the other machine's attempts are not re-counted here");
    assert.equal(laptop.elapsedSeconds, 0, "nor is its time");
  });

  await t.test("doctor accepts completed work whose solution is present", () => {
    const result = runCli(root, "doctor");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Every completed challenge still passes/);
  });

  await t.test("doctor reports progress that arrived without its solution", () => {
    writeFileSync(taskPath(root, "TS-CORE-001"), STARTER, "utf8");
    const result = runCli(root, "doctor");
    assert.equal(result.status, 1);
    assert.match(result.stdout, /TS-CORE-001/);
  });
});

test("topics reports only the active domain", async (t) => {
  const root = createFixtureRepository();
  t.after(() => rmSync(root, { recursive: true, force: true }));

  // A second domain must not leak into a TypeScript session's report.
  const other = join(root, "challenges", "javascript", "01-basics", "JS-BAS-001-closures");
  mkdirSync(other, { recursive: true });
  writeFileSync(join(other, "meta.json"), metadata("JS-BAS-001", "javascript", "basics"), "utf8");
  writeFileSync(join(other, "README.md"), "# JS-BAS-001\n", "utf8");
  writeFileSync(join(other, "task.ts"), STARTER, "utf8");
  writeFileSync(join(other, "test.ts"), TEST_FILE, "utf8");

  runCli(root, "start", "typescript");
  const result = runCli(root, "topics");

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /typescript\/core/);
  assert.doesNotMatch(result.stdout, /javascript/, "another domain must not be listed");
});
