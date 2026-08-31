import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { hostname } from "node:os";
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

const SHARD_PATTERN = /^progress\.(.+)\.json$/;

function frenzyDirectory(root: string): string {
  return join(root, ".frenzy");
}

/**
 * Every machine writes only its own shard, so shards never conflict when they
 * travel through git. The id is stored so that renaming the host does not fork it.
 */
export function deviceId(root: string): string {
  const path = join(frenzyDirectory(root), "device");
  if (existsSync(path)) {
    const stored = readFileSync(path, "utf8").trim();
    if (stored.length > 0) return stored;
  }
  const generated =
    hostname()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 32) || "device";
  mkdirSync(frenzyDirectory(root), { recursive: true });
  writeFileSync(path, `${generated}\n`, "utf8");
  return generated;
}

export function progressPath(root: string, device: string = deviceId(root)): string {
  return join(frenzyDirectory(root), `progress.${device}.json`);
}

function parseProgress(path: string): ProgressFile {
  const value = JSON.parse(readFileSync(path, "utf8")) as unknown;
  if (typeof value !== "object" || value === null || (value as { version?: unknown }).version !== 1) {
    throw new Error(`Unsupported or invalid progress file: ${path}`);
  }
  return value as ProgressFile;
}

/** Adopts a pre-sharding progress file as this machine's shard. */
function migrateLegacyProgress(root: string, path: string): void {
  const legacy = join(frenzyDirectory(root), "progress.json");
  if (existsSync(legacy) && !existsSync(path)) renameSync(legacy, path);
}

export function readProgress(root: string, device: string = deviceId(root)): ProgressFile {
  const path = progressPath(root, device);
  migrateLegacyProgress(root, path);
  if (!existsSync(path)) return createProgress();
  return parseProgress(path);
}

/** Every other machine's shard, keyed by device id. */
export function readOtherProgress(root: string, device: string = deviceId(root)): ProgressFile[] {
  const directory = frenzyDirectory(root);
  if (!existsSync(directory)) return [];
  return readdirSync(directory)
    .flatMap((entry) => {
      const match = SHARD_PATTERN.exec(entry);
      return match && match[1] !== device ? [join(directory, entry)] : [];
    })
    .sort()
    .map(parseProgress);
}

export function listDevices(root: string): string[] {
  const directory = frenzyDirectory(root);
  if (!existsSync(directory)) return [];
  return readdirSync(directory)
    .flatMap((entry) => {
      const match = SHARD_PATTERN.exec(entry);
      return match?.[1] === undefined ? [] : [match[1]];
    })
    .sort();
}

export function writeProgress(
  root: string,
  progress: ProgressFile,
  device: string = deviceId(root),
): void {
  const path = progressPath(root, device);
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
