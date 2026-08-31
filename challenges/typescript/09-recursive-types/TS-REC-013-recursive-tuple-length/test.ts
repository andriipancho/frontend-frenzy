import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleLength } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleLength<[]>,
      0
    >
  >,
  Expect<
    Equal<
      TupleLength<[string,number,boolean]>,
      3
    >
  >,
  Expect<
    Equal<
      TupleLength<readonly [1,2,3,4]>,
      4
    >
  >,
];

export type TestCases = Cases;
