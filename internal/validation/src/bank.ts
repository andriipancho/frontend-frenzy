import { existsSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";

import type { Challenge } from "../../challenge-schema/src/discovery.js";

const DOMAIN_CODES: Readonly<Record<string, string>> = {
  typescript: "TS",
};

const TOPIC_CODES: Readonly<Record<string, Readonly<Record<string, string>>>> = {
  typescript: {
    "01-core": "CORE",
    "02-unions-and-narrowing": "NAR",
    "03-generics": "GEN",
    "04-type-operators": "OPS",
    "05-utility-types": "UTL",
    "06-mapped-types": "MAP",
    "07-conditional-types": "CND",
    "08-infer-and-template-literals": "INF",
    "09-recursive-types": "REC",
    "10-advanced-mixed": "MIX",
    "11-production-boss": "PROD",
  },
};

// A test that only calls the exported API proves nothing: `any` satisfies it.
// Every test must pin a type or prove an invalid usage stays invalid.
const ASSERTION_PATTERN = /Expect<|@ts-expect-error/;

export function validateChallengeBank(challenges: readonly Challenge[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  for (const challenge of challenges) {
    const { metadata } = challenge;
    if (ids.has(metadata.id)) errors.push(`${metadata.id}: duplicate ID`);
    ids.add(metadata.id);

    const domainCode = DOMAIN_CODES[metadata.domain];
    const topicCode = TOPIC_CODES[metadata.domain]?.[challenge.topicDirectory];
    if (!domainCode) errors.push(`${metadata.id}: domain ${metadata.domain} has no registered ID code`);
    if (!topicCode) errors.push(`${metadata.id}: unknown topic directory ${challenge.topicDirectory}`);
    if (domainCode && topicCode && !metadata.id.startsWith(`${domainCode}-${topicCode}-`)) {
      errors.push(`${metadata.id}: ID must use ${domainCode}-${topicCode}`);
    }
    const expectedTopic = challenge.topicDirectory.replace(/^\d+-/, "");
    if (metadata.topic !== expectedTopic) {
      errors.push(`${metadata.id}: metadata topic must be ${expectedTopic}`);
    }
    if (!basename(challenge.directory).startsWith(`${metadata.id}-`)) {
      errors.push(`${metadata.id}: folder name must begin with the stable ID`);
    }
    for (const required of ["README.md", "task.ts", "test.ts", "meta.json"]) {
      if (!existsSync(join(challenge.directory, required))) {
        errors.push(`${metadata.id}: missing ${required}`);
      }
    }
    const testPath = join(challenge.directory, "test.ts");
    if (existsSync(testPath) && !ASSERTION_PATTERN.test(readFileSync(testPath, "utf8"))) {
      errors.push(`${metadata.id}: test.ts must assert with Expect<...> or @ts-expect-error`);
    }
  }

  return errors;
}
