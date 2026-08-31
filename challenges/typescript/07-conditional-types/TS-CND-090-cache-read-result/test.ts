import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CacheRead } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CacheRead<string, true>,
      { hit: true; value: string; stale: false }
    >
  >,
  Expect<
    Equal<
      CacheRead<{ id: string }, false>,
      { hit: false; value?: { id: string }; stale: true }
    >
  >,
];

export type TestCases = Cases;
