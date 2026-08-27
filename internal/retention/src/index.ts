import type { Challenge } from "../../challenge-schema/src/discovery.js";
import type { ChallengeProgress, ProgressFile, RetentionState } from "../../progress/src/index.js";

export const RETENTION_INTERVAL_DAYS = [1, 3, 7, 14, 30] as const;
const DAY_MS = 24 * 60 * 60 * 1_000;

function dateAfter(now: Date, days: number): string {
  return new Date(now.getTime() + days * DAY_MS).toISOString();
}

export function scheduleFirstReview(now: Date): RetentionState {
  return { stage: 0, dueAt: dateAfter(now, RETENTION_INTERVAL_DAYS[0]), reviewCount: 0 };
}

export function recordReview(state: RetentionState, passed: boolean, now: Date): void {
  state.reviewCount += 1;
  state.lastResult = passed ? "passed" : "failed";
  if (!passed) {
    state.dueAt = dateAfter(now, 1);
    return;
  }
  state.stage = Math.min(state.stage + 1, RETENTION_INTERVAL_DAYS.length - 1);
  const interval = RETENTION_INTERVAL_DAYS[state.stage] as number;
  state.dueAt = dateAfter(now, interval);
}

function retentionPriority(challenge: Challenge, state: ChallengeProgress): number {
  const difficultyWeight = { easy: 0, medium: 1, hard: 2, boss: 3 }[challenge.metadata.difficulty];
  const hintWeight = state.hintsUsed * 2;
  const failureWeight = Math.max(0, state.attempts - 1) * 3;
  const timeBudget = challenge.metadata.estimatedMinutes * 60;
  const timeWeight = state.elapsedSeconds > timeBudget ? 1 : 0;
  const previousFailureWeight = state.retention?.lastResult === "failed" ? 4 : 0;
  return difficultyWeight + hintWeight + failureWeight + timeWeight + previousFailureWeight;
}

export function selectDueChallenge(
  challenges: readonly Challenge[],
  progress: ProgressFile,
  now: Date,
): Challenge | undefined {
  return challenges
    .filter((challenge) => {
      const state = progress.challenges[challenge.metadata.id];
      return state?.status === "completed" && state.retention && new Date(state.retention.dueAt) <= now;
    })
    .sort((left, right) => {
      const leftState = progress.challenges[left.metadata.id] as ChallengeProgress;
      const rightState = progress.challenges[right.metadata.id] as ChallengeProgress;
      const priorityDifference = retentionPriority(right, rightState) - retentionPriority(left, leftState);
      if (priorityDifference !== 0) return priorityDifference;
      const dueDifference =
        new Date(leftState.retention?.dueAt ?? 0).getTime() -
        new Date(rightState.retention?.dueAt ?? 0).getTime();
      return dueDifference || left.metadata.id.localeCompare(right.metadata.id);
    })[0];
}
