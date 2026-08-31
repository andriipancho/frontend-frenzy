import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleMiddle } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleMiddle<[string, number, boolean, Date]>,
      [number, boolean]
    >
  >,
  Expect<
    Equal<
      TupleMiddle<readonly [1, 2]>,
      []
    >
  >,
  Expect<
    Equal<
      TupleMiddle<[1]>,
      []
    >
  >,
];

export type TestCases = Cases;
