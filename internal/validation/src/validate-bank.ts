#!/usr/bin/env node
import { discoverChallenges, findRepositoryRoot } from "../../challenge-schema/src/discovery.js";
import { validateChallengeBank } from "./bank.js";

const root = findRepositoryRoot();
const challenges = discoverChallenges(root);
const errors = validateChallengeBank(challenges);

if (errors.length > 0) {
  console.error(`Challenge bank validation failed:\n${errors.map((error) => `- ${error}`).join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Challenge bank valid: ${challenges.length} challenges.`);
}
