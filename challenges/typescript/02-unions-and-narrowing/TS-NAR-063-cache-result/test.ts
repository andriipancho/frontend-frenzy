import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CacheResult } from "./task.js";

type Expected =
  | { state: "hit"; value: string }
  | { state: "miss" }
  | { state: "stale"; value: string; ageSeconds: number };
type Cases = [Expect<Equal<CacheResult, Expected>>];
// @ts-expect-error stale entries require age
const invalid: CacheResult = { state: "stale", value: "cached" };
void invalid;
export type TestCases = Cases;
