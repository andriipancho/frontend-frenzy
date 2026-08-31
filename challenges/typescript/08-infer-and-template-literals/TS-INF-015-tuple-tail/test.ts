import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleTail } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleTail<[string, number, boolean]>,
      [number, boolean]
    >
  >,
  Expect<
    Equal<
      TupleTail<readonly [1]>,
      []
    >
  >,
  Expect<
    Equal<
      TupleTail<[]>,
      []
    >
  >,
];

export type TestCases = Cases;
