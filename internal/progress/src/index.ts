import { randomBytes } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
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
 * Every device writes only its own shard, so shards never conflict when they
 * travel through git. The opaque id is stored locally and reveals no host details.
 */
export function deviceId(root: string): string {
  const path = join(frenzyDirectory(root), "device");
  if (existsSync(path)) {
    const stored = readFileSync(path, "utf8").trim();
    if (stored.length > 0) return stored;
  }
  const generated = `device-${randomBytes(8).toString("hex")}`;
  mkdirSync(frenzyDirectory(root), { recursive: true });
  writeFileSync(path, `${generated}\n`, "utf8");
  return generated;
}

export function progressPath(root: string, device: string = deviceId(root)): string {
  return join(frenzyDirectory(root), `progress.${device}.json`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isTimestamp(value: unknown): boolean {
  return typeof value === "string" && !Number.isNaN(new Date(value).getTime());
}

function isCount(value: unknown): boolean {
  return typeof value === "number" && Number.isInteger(value) && value >= 0;
}

function retentionErrors(value: unknown): string[] {
  if (!isRecord(value)) return ["retention must be an object"];
  const errors: string[] = [];
  if (!isCount(value.stage)) errors.push("retention.stage must be a non-negative integer");
  if (!isTimestamp(value.dueAt)) errors.push("retention.dueAt must be a timestamp");
  if (!isCount(value.reviewCount)) errors.push("retention.reviewCount must be a non-negative integer");
  if (value.lastResult !== undefined && value.lastResult !== "passed" && value.lastResult !== "failed") {
    errors.push("retention.lastResult must be passed or failed");
  }
  return errors;
}

function entryErrors(id: string, value: unknown): string[] {
  if (!isRecord(value)) return [`${id} must be an object`];
  const errors: string[] = [];
  if (value.status !== "started" && value.status !== "completed") {
    errors.push(`${id}.status must be started or completed`);
  }
  if (!isTimestamp(value.startedAt)) errors.push(`${id}.startedAt must be a timestamp`);
  if (value.completedAt !== undefined && !isTimestamp(value.completedAt)) {
    errors.push(`${id}.completedAt must be a timestamp`);
  }
  for (const key of ["attempts", "hintsUsed", "elapsedSeconds"] as const) {
    if (!isCount(value[key])) errors.push(`${id}.${key} must be a non-negative integer`);
  }
  if (value.retention !== undefined) {
    errors.push(...retentionErrors(value.retention).map((error) => `${id}.${error}`));
  }
  return errors;
}

/**
 * Shards travel between machines through git, so a malformed one must fail with
 * the field that is wrong rather than with a stack trace deep in a command.
 */
export function progressErrors(value: unknown): string[] {
  if (!isRecord(value)) return ["progress must be a JSON object"];
  if (value.version !== 1) return [`unsupported progress version: ${JSON.stringify(value.version)}`];

  const errors: string[] = [];
  if (!isRecord(value.activeSession) || typeof value.activeSession.domain !== "string") {
    errors.push("activeSession.domain must be a string");
  } else if (
    value.activeSession.topic !== undefined &&
    typeof value.activeSession.topic !== "string"
  ) {
    errors.push("activeSession.topic must be a string");
  }
  if (value.currentChallengeId !== undefined && typeof value.currentChallengeId !== "string") {
    errors.push("currentChallengeId must be a string");
  }
  if (
    value.currentMode !== undefined &&
    value.currentMode !== "practice" &&
    value.currentMode !== "retention"
  ) {
    errors.push("currentMode must be practice or retention");
  }
  if (!isRecord(value.challenges)) {
    errors.push("challenges must be an object");
  } else {
    for (const [id, entry] of Object.entries(value.challenges)) {
      errors.push(...entryErrors(id, entry));
    }
  }
  return errors;
}

function parseProgress(path: string): ProgressFile {
  const value = JSON.parse(readFileSync(path, "utf8")) as unknown;
  const errors = progressErrors(value);
  if (errors.length > 0) {
    throw new Error(`Invalid progress file ${path}:\n${errors.map((e) => `  - ${e}`).join("\n")}`);
  }
  return value as unknown as ProgressFile;
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

/** Every other device's shard, keyed by its opaque id. */
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
