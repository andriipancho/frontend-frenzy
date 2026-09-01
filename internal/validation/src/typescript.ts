import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

import type { Challenge } from "../../challenge-schema/src/discovery.js";
import { findViolations, formatViolations, type Restriction } from "./constraints.js";

export interface ValidationResult {
  readonly passed: boolean;
  readonly output: string;
  /** Compiler output is a diagnostic dump; every other message is short and shown as-is. */
  readonly kind?: "compiler";
}

export function validateTypeScriptChallenge(root: string, challenge: Challenge): ValidationResult {
  const compiler = join(root, "node_modules", "typescript", "bin", "tsc");
  const testFile = join(challenge.directory, "test.ts");
  if (!existsSync(compiler)) {
    return { passed: false, output: "TypeScript is not installed. Run npm install." };
  }
  if (!existsSync(testFile)) {
    return { passed: false, output: `Missing test.ts in ${challenge.relativeDirectory}.` };
  }

  const result = spawnSync(
    process.execPath,
    [
      compiler,
      "--noEmit",
      "--strict",
      "--noUncheckedIndexedAccess",
      "--exactOptionalPropertyTypes",
      "--target",
      "ES2022",
      "--module",
      "NodeNext",
      "--moduleResolution",
      "NodeNext",
      "--skipLibCheck",
      testFile,
    ],
    { cwd: root, encoding: "utf8" },
  );

  if (result.status !== 0) {
    return {
      passed: false,
      kind: "compiler",
      output: [result.stdout, result.stderr].filter(Boolean).join("\n").trim(),
    };
  }

  // Only once it compiles: code that used `any` to get here still has to answer for it.
  const forbidden = challenge.metadata.constraints?.forbid ?? [];
  const taskFile = join(challenge.directory, "task.ts");
  if (forbidden.length > 0 && existsSync(taskFile)) {
    const violations = findViolations(
      readFileSync(taskFile, "utf8"),
      forbidden as readonly Restriction[],
    );
    if (violations.length > 0) {
      return {
        passed: false,
        output: `The solution compiles but breaks the constraints in the README:\n${formatViolations(violations)}`,
      };
    }
  }

  return { passed: true, output: "" };
}
