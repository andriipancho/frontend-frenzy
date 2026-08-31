import type { ChallengeProgress, ProgressFile, RetentionState } from "./index.js";

function earliest(left: string, right: string): string {
  return new Date(left) <= new Date(right) ? left : right;
}

function earliestOptional(left: string | undefined, right: string | undefined): string | undefined {
  if (left === undefined) return right;
  if (right === undefined) return left;
  return earliest(left, right);
}

/**
 * Reviews happen one after another in wall-clock time, so the shard that has
 * seen more of them holds the current schedule.
 */
function mergeRetention(
  left: RetentionState | undefined,
  right: RetentionState | undefined,
): RetentionState | undefined {
  if (left === undefined) return right === undefined ? undefined : { ...right };
  if (right === undefined) return { ...left };
  if (left.reviewCount !== right.reviewCount) {
    return { ...(left.reviewCount > right.reviewCount ? left : right) };
  }
  return { ...(new Date(left.dueAt) >= new Date(right.dueAt) ? left : right) };
}

/**
 * Attempts and time are summed because every shard counts only the work done on
 * its own machine. Hints are an ordered reveal of the same list, so the furthest
 * reveal wins instead.
 */
function mergeEntry(left: ChallengeProgress, right: ChallengeProgress): ChallengeProgress {
  const merged: ChallengeProgress = {
    status: left.status === "completed" || right.status === "completed" ? "completed" : "started",
    startedAt: earliest(left.startedAt, right.startedAt),
    attempts: left.attempts + right.attempts,
    hintsUsed: Math.max(left.hintsUsed, right.hintsUsed),
    elapsedSeconds: left.elapsedSeconds + right.elapsedSeconds,
  };
  const completedAt = earliestOptional(left.completedAt, right.completedAt);
  if (completedAt !== undefined) merged.completedAt = completedAt;
  const retention = mergeRetention(left.retention, right.retention);
  if (retention !== undefined) merged.retention = retention;
  return merged;
}

/**
 * Combines the per-challenge history of every machine. Session pointers stay
 * local: being midway through a challenge on one machine must not hijack another.
 */
export function mergeProgress(local: ProgressFile, others: readonly ProgressFile[]): ProgressFile {
  const merged: ProgressFile = { ...local, challenges: {} };
  for (const shard of [local, ...others]) {
    for (const [id, entry] of Object.entries(shard.challenges)) {
      const existing = merged.challenges[id];
      merged.challenges[id] = existing === undefined ? { ...entry } : mergeEntry(existing, entry);
    }
  }
  return merged;
}

/**
 * Seeds a local entry from history another machine recorded. Attempts and time
 * restart at zero so that summing across shards cannot double-count them.
 */
export function adoptSharedState(entry: ChallengeProgress): ChallengeProgress {
  const adopted: ChallengeProgress = {
    status: entry.status,
    startedAt: entry.startedAt,
    attempts: 0,
    hintsUsed: entry.hintsUsed,
    elapsedSeconds: 0,
  };
  if (entry.completedAt !== undefined) adopted.completedAt = entry.completedAt;
  if (entry.retention !== undefined) adopted.retention = { ...entry.retention };
  return adopted;
}
