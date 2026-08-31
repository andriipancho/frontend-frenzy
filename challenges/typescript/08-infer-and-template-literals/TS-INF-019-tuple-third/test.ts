import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleThird } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleThird<[string, number, boolean, Date]>,
      boolean
    >
  >,
  Expect<
    Equal<
      TupleThird<readonly [1, 2, 3]>,
      3
    >
  >,
  Expect<
    Equal<
      TupleThird<[1, 2]>,
      never
    >
  >,
];

export type TestCases = Cases;
