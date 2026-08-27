import { existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

import type { Challenge } from "../../challenge-schema/src/discovery.js";

export interface ValidationResult {
  readonly passed: boolean;
  readonly output: string;
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

  return {
    passed: result.status === 0,
    output: [result.stdout, result.stderr].filter(Boolean).join("\n").trim(),
  };
}
