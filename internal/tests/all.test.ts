import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  validateChallengeMetadata,
  type ChallengeMetadata,
} from "../challenge-schema/src/index.js";
import type { Challenge } from "../challenge-schema/src/discovery.js";
import {
  createProgress,
  readProgress,
  startChallenge,
  writeProgress,
} from "../progress/src/index.js";
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
  assert.ok(errors.some((error) => error.includes("DOMAIN-TOPIC-NNN")));
  assert.ok(errors.some((error) => error.includes("hints")));
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
