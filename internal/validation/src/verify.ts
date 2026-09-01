import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

import type { Challenge } from "../../challenge-schema/src/discovery.js";
import { validateTypeScriptChallenge } from "./typescript.js";
import { findViolations, formatViolations, type Restriction } from "./constraints.js";

export interface VerificationResult {
  readonly id: string;
  /** A reference solution exists and satisfies the challenge. */
  readonly solvable: boolean;
  /** The published starter still fails, so the challenge is not already solved. */
  readonly starterFails: boolean;
  readonly problems: readonly string[];
}

export function referencePath(root: string, challenge: Challenge): string {
  return join(root, "reference", challenge.metadata.domain, `${challenge.metadata.id}.ts`);
}

/**
 * Runs a candidate solution through the real validator. The scratch copy is a
 * sibling of the challenge so the relative import in test.ts resolves the same,
 * and the challenge's own files are never written to.
 */
function validateCandidate(root: string, challenge: Challenge, code: string): string | undefined {
  const scratch = mkdtempSync(join(dirname(challenge.directory), ".verify-"));
  try {
    cpSync(join(challenge.directory, "test.ts"), join(scratch, "test.ts"));
    writeFileSync(join(scratch, "task.ts"), code, "utf8");
    const result = validateTypeScriptChallenge(root, {
      ...challenge,
      directory: scratch,
      relativeDirectory: challenge.relativeDirectory,
    });
    return result.passed ? undefined : result.output;
  } finally {
    rmSync(scratch, { recursive: true, force: true });
  }
}

/** The published starter, so a locally solved task.ts does not mask a broken challenge. */
function publishedStarter(root: string, challenge: Challenge): string | undefined {
  const relative = join(challenge.relativeDirectory, "task.ts");
  const result = spawnSync("git", ["show", `HEAD:${relative}`], { cwd: root, encoding: "utf8" });
  if (result.status === 0) return result.stdout;
  const local = join(challenge.directory, "task.ts");
  return existsSync(local) ? readFileSync(local, "utf8") : undefined;
}

export function verifyChallenge(root: string, challenge: Challenge): VerificationResult {
  const id = challenge.metadata.id;
  const problems: string[] = [];
  const reference = referencePath(root, challenge);

  if (!existsSync(reference)) {
    return { id, solvable: false, starterFails: false, problems: ["no reference solution"] };
  }

  const code = readFileSync(reference, "utf8");
  const forbidden = (challenge.metadata.constraints?.forbid ?? []) as readonly Restriction[];
  const violations = findViolations(code, forbidden, reference);
  if (violations.length > 0) {
    problems.push(`the reference solution breaks its own constraints:\n${formatViolations(violations)}`);
  }

  const failure = validateCandidate(root, challenge, code);
  if (failure !== undefined) problems.push(`the reference solution does not pass:\n${failure}`);

  const starter = publishedStarter(root, challenge);
  let starterFails = false;
  if (starter === undefined) {
    problems.push("the starter could not be read");
  } else if (validateCandidate(root, challenge, starter) === undefined) {
    problems.push("the published starter already passes, so the challenge asks for nothing");
  } else {
    starterFails = true;
  }

  return { id, solvable: failure === undefined && violations.length === 0, starterFails, problems };
}
