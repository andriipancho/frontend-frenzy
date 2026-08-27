import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PatchEntry } from "./task.js";

type Config = { endpoint: string; retries: number };
type RetryPatch = PatchEntry<Config, "retries">;
type Cases = [
  Expect<Equal<RetryPatch, { key: "retries"; value: number }>>,
];
// @ts-expect-error retries requires a number
const invalid: RetryPatch = { key: "retries", value: "/api" };
export type TestCases = Cases;
