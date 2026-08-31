import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SplitLast } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SplitLast<[string, number, boolean]>,
      [[string, number], boolean]
    >
  >,
  Expect<
    Equal<
      SplitLast<readonly [1]>,
      [[], 1]
    >
  >,
  Expect<
    Equal<
      SplitLast<[]>,
      never
    >
  >,
];

export type TestCases = Cases;
