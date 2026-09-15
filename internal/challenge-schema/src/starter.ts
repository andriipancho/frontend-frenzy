import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import type { Challenge } from "./discovery.js";

function git(root: string, ...args: readonly string[]): string | undefined {
  const result = spawnSync("git", args, { cwd: root, encoding: "utf8" });
  return result.status === 0 ? result.stdout : undefined;
}

/**
 * Refs that publish challenges, nearest first. HEAD comes last on purpose: a
 * branch carrying solutions has an already-solved task.ts at HEAD, which is the
 * one version that must never be mistaken for the starter.
 */
function publishingRefs(root: string): readonly string[] {
  const remoteHead = git(root, "symbolic-ref", "--short", "refs/remotes/origin/HEAD")?.trim();
  const candidates = [remoteHead, "origin/main", "main", "HEAD"];
  return candidates.filter((ref): ref is string => ref !== undefined && ref.length > 0);
}

/**
 * The task file as published, so a locally solved copy cannot pass for a starter.
 * Outside a git repository, or before the challenge is committed, the working
 * copy is all there is — which is what challenge authoring works against.
 */
export function publishedStarter(root: string, challenge: Challenge): string | undefined {
  const relative = join(challenge.relativeDirectory, "task.ts");
  for (const ref of publishingRefs(root)) {
    const published = git(root, "show", `${ref}:${relative}`);
    if (published !== undefined) return published;
  }
  const local = join(challenge.directory, "task.ts");
  return existsSync(local) ? readFileSync(local, "utf8") : undefined;
}
