import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ArrayDepth } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ArrayDepth<string[][][]>,
      3
    >
  >,
  Expect<
    Equal<
      ArrayDepth<readonly number[]>,
      1
    >
  >,
  Expect<
    Equal<
      ArrayDepth<boolean>,
      0
    >
  >,
];

export type TestCases = Cases;
