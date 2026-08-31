import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ArrayMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ArrayMembers<string | string[] | readonly [1, 2]>,
      string[] | readonly [1, 2]
    >
  >,
  Expect<
    Equal<
      ArrayMembers<{ length: number }>,
      never
    >
  >,
];

export type TestCases = Cases;
