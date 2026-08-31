import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SwapFirstTwo } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SwapFirstTwo<[string, number, boolean]>,
      [number, string, boolean]
    >
  >,
  Expect<
    Equal<
      SwapFirstTwo<readonly [1, 2]>,
      [2, 1]
    >
  >,
  Expect<
    Equal<
      SwapFirstTwo<[1]>,
      [1]
    >
  >,
];

export type TestCases = Cases;
