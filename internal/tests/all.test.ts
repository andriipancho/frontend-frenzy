import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  validateChallengeMetadata,
  type ChallengeMetadata,
} from "../challenge-schema/src/index.js";
import type { Challenge } from "../challenge-schema/src/discovery.js";
import { validateChallengeBank } from "../validation/src/bank.js";
import { findViolations } from "../validation/src/constraints.js";
import {
  createProgress,
  deviceId,
  progressErrors,
  type ChallengeProgress,
  readProgress,
  startChallenge,
  writeProgress,
} from "../progress/src/index.js";
import { adoptSharedState, mergeProgress } from "../progress/src/merge.js";
import {
  recordReview,
  scheduleFirstReview,
  selectDueChallenge,
} from "../retention/src/index.js";

const metadata: ChallengeMetadata = {
  id: "TS-GEN-001",
  title: "Preserve identity",
  domain: "typescript",
  topic: "generics",
  difficulty: "medium",
  topics: ["generics"],
  estimatedMinutes: 5,
  prerequisites: [],
  hints: ["Keep the input and output types connected."],
  validation: { type: "typescript" },
};

function challenge(id: string, difficulty: ChallengeMetadata["difficulty"]): Challenge {
  return {
    metadata: { ...metadata, id, difficulty },
    directory: `/repo/${id}`,
    relativeDirectory: `challenges/${id}`,
    topicDirectory: "03-generics",
  };
}

test("challenge metadata validation accepts the documented shape", () => {
  assert.deepEqual(validateChallengeMetadata(metadata), []);
});

test("challenge metadata validation rejects unstable IDs and missing hints", () => {
  const errors = validateChallengeMetadata({ ...metadata, id: "challenge-1", hints: [] });
  assert.ok(errors.some((error: string) => error.includes("DOMAIN-TOPIC-NNN")));
  assert.ok(errors.some((error: string) => error.includes("hints")));
});

test("progress is written atomically and can be resumed", () => {
  const directory = mkdtempSync(join(tmpdir(), "frontend-frenzy-"));
  try {
    const progress = createProgress();
    startChallenge(progress, "TS-GEN-001", new Date("2026-01-01T00:00:00.000Z"));
    writeProgress(directory, progress);
    assert.deepEqual(readProgress(directory), progress);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test("device ids are stable and do not expose host details", () => {
  const directory = mkdtempSync(join(tmpdir(), "frontend-frenzy-device-"));
  try {
    const first = deviceId(directory);
    assert.match(first, /^device-[a-f0-9]{16}$/);
    assert.equal(deviceId(directory), first);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test("retention intervals advance and failures retry after one day", () => {
  const state = scheduleFirstReview(new Date("2026-01-01T00:00:00.000Z"));
  assert.equal(state.dueAt, "2026-01-02T00:00:00.000Z");

  recordReview(state, true, new Date("2026-01-02T00:00:00.000Z"));
  assert.equal(state.stage, 1);
  assert.equal(state.dueAt, "2026-01-05T00:00:00.000Z");

  recordReview(state, false, new Date("2026-01-05T00:00:00.000Z"));
  assert.equal(state.stage, 1);
  assert.equal(state.dueAt, "2026-01-06T00:00:00.000Z");
});

test("retention selects a harder due challenge when other signals are equal", () => {
  const easy = challenge("TS-GEN-001", "easy");
  const hard = challenge("TS-GEN-002", "hard");
  const progress = createProgress();
  for (const item of [easy, hard]) {
    progress.challenges[item.metadata.id] = {
      status: "completed",
      startedAt: "2026-01-01T00:00:00.000Z",
      completedAt: "2026-01-01T00:01:00.000Z",
      attempts: 1,
      hintsUsed: 0,
      elapsedSeconds: 60,
      retention: {
        stage: 0,
        dueAt: "2026-01-02T00:00:00.000Z",
        reviewCount: 0,
      },
    };
  }

  const selected = selectDueChallenge([easy, hard], progress, new Date("2026-01-03T00:00:00.000Z"));
  assert.equal(selected?.metadata.id, "TS-GEN-002");
});

test("the bank validator rejects a test that asserts nothing", () => {
  const directory = mkdtempSync(join(tmpdir(), "frontend-frenzy-bank-"));
  try {
    const challengeDirectory = join(directory, "TS-GEN-001-identity");
    mkdirSync(challengeDirectory, { recursive: true });
    for (const file of ["README.md", "task.ts", "meta.json"]) {
      writeFileSync(join(challengeDirectory, file), "", "utf8");
    }
    const entry: Challenge = {
      metadata,
      directory: challengeDirectory,
      relativeDirectory: "challenges/TS-GEN-001-identity",
      topicDirectory: "03-generics",
    };

    writeFileSync(join(challengeDirectory, "test.ts"), 'identity("a");\n', "utf8");
    assert.ok(
      validateChallengeBank([entry]).some((error: string) => error.includes("must assert")),
      "a call-only test must be rejected",
    );

    writeFileSync(
      join(challengeDirectory, "test.ts"),
      "type Cases = [Expect<Equal<string, string>>];\n",
      "utf8",
    );
    assert.deepEqual(validateChallengeBank([entry]), []);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

function completed(overrides: Partial<ChallengeProgress> = {}): ChallengeProgress {
  return {
    status: "completed",
    startedAt: "2026-01-01T00:00:00.000Z",
    completedAt: "2026-01-01T00:10:00.000Z",
    attempts: 2,
    hintsUsed: 1,
    elapsedSeconds: 300,
    ...overrides,
  };
}

test("merging shards sums each machine's own work without double counting", () => {
  const local = createProgress();
  local.challenges["TS-GEN-001"] = completed({ attempts: 2, elapsedSeconds: 300, hintsUsed: 1 });
  const other = createProgress();
  other.challenges["TS-GEN-001"] = completed({
    startedAt: "2025-12-31T00:00:00.000Z",
    completedAt: "2025-12-31T00:05:00.000Z",
    attempts: 3,
    elapsedSeconds: 120,
    hintsUsed: 3,
  });

  const merged = mergeProgress(local, [other]);
  const entry = merged.challenges["TS-GEN-001"];
  assert.ok(entry);
  assert.equal(entry.attempts, 5, "attempts are summed");
  assert.equal(entry.elapsedSeconds, 420, "time is summed");
  assert.equal(entry.hintsUsed, 3, "the furthest hint reveal wins");
  assert.equal(entry.startedAt, "2025-12-31T00:00:00.000Z", "the earliest start wins");
  assert.equal(entry.completedAt, "2025-12-31T00:05:00.000Z", "the first solve wins");
});

test("merging keeps a completion and the further-advanced review schedule", () => {
  const local = createProgress();
  local.challenges["TS-GEN-001"] = {
    status: "started",
    startedAt: "2026-01-02T00:00:00.000Z",
    attempts: 1,
    hintsUsed: 0,
    elapsedSeconds: 60,
    retention: { stage: 0, dueAt: "2026-01-03T00:00:00.000Z", reviewCount: 0 },
  };
  const other = createProgress();
  other.challenges["TS-GEN-001"] = completed({
    retention: { stage: 2, dueAt: "2026-02-01T00:00:00.000Z", reviewCount: 3 },
  });

  const entry = mergeProgress(local, [other]).challenges["TS-GEN-001"];
  assert.equal(entry?.status, "completed");
  assert.equal(entry?.retention?.reviewCount, 3);
  assert.equal(entry?.retention?.stage, 2);
});

test("merging leaves the session pointer local to this machine", () => {
  const local = createProgress();
  local.currentChallengeId = "TS-GEN-001";
  const other = createProgress();
  other.currentChallengeId = "TS-MAP-050";

  assert.equal(mergeProgress(local, [other]).currentChallengeId, "TS-GEN-001");
});

test("adopting another machine's entry restarts its own counters at zero", () => {
  const adopted = adoptSharedState(
    completed({ retention: { stage: 1, dueAt: "2026-02-01T00:00:00.000Z", reviewCount: 2 } }),
  );

  assert.equal(adopted.status, "completed");
  assert.equal(adopted.completedAt, "2026-01-01T00:10:00.000Z");
  assert.equal(adopted.hintsUsed, 1);
  assert.equal(adopted.retention?.reviewCount, 2);
  assert.equal(adopted.attempts, 0, "attempts stay with the machine that made them");
  assert.equal(adopted.elapsedSeconds, 0, "time stays with the machine that spent it");
});

test("a malformed progress shard is rejected with the field that is wrong", () => {
  assert.deepEqual(progressErrors(createProgress()), []);

  assert.ok(progressErrors({ version: 2 }).some((error: string) => error.includes("unsupported progress version")));

  const errors = progressErrors({
    version: 1,
    activeSession: { domain: "typescript" },
    currentMode: "reviewing",
    challenges: {
      "TS-GEN-001": {
        status: "done",
        startedAt: "not-a-date",
        attempts: -1,
        hintsUsed: 0,
        elapsedSeconds: 0,
      },
    },
  });

  assert.ok(errors.some((error: string) => error.includes("currentMode")));
  assert.ok(errors.some((error: string) => error.includes("TS-GEN-001.status")));
  assert.ok(errors.some((error: string) => error.includes("TS-GEN-001.startedAt")));
  assert.ok(errors.some((error: string) => error.includes("TS-GEN-001.attempts")));
});

test("the constraint checker reads syntax, not text", () => {
  const code = [
    "// many values are any here, and `x as Y` in a comment",
    'const note = "cast with as User and any";',
    "const many = 1;",
    "export const ok = { a: 1 } as const;",
  ].join("\n");

  assert.deepEqual(
    findViolations(code, ["any", "type-assertion"]),
    [],
    "comments, strings, identifiers, and `as const` are not violations",
  );
});

test("the constraint checker reports each forbidden construct with its line", () => {
  const code = [
    "export function toLabel(value: any): string {",
    "  const forced = value as string;",
    "  return forced!.trim();",
    "}",
  ].join("\n");

  const all = findViolations(code, ["any", "type-assertion", "non-null-assertion"]);
  assert.deepEqual(
    all.map((violation) => [violation.restriction, violation.line]),
    [
      ["any", 1],
      ["type-assertion", 2],
      ["non-null-assertion", 3],
    ],
  );

  assert.deepEqual(
    findViolations(code, ["non-null-assertion"]).map((violation) => violation.restriction),
    ["non-null-assertion"],
    "only the declared restrictions are reported",
  );
  assert.deepEqual(findViolations(code, []), [], "no constraints means no checking");
});

test("challenge metadata validation accepts and guards the constraints block", () => {
  assert.deepEqual(
    validateChallengeMetadata({ ...metadata, constraints: { forbid: ["any", "type-assertion"] } }),
    [],
  );
  assert.ok(
    validateChallengeMetadata({ ...metadata, constraints: { forbid: ["casting"] } }).some(
      (error: string) => error.includes("constraints.forbid entries"),
    ),
  );
  assert.ok(
    validateChallengeMetadata({ ...metadata, constraints: { forbid: [] } }).some((error: string) =>
      error.includes("non-empty"),
    ),
  );
});
