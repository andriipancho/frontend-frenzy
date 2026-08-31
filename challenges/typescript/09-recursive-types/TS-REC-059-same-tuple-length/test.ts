import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SameLength } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SameLength<[1,2],["a","b"]>,
      true
    >
  >,
  Expect<
    Equal<
      SameLength<[1],[1,2]>,
      false
    >
  >,
  Expect<
    Equal<
      SameLength<[],[]>,
      true
    >
  >,
];

export type TestCases = Cases;
