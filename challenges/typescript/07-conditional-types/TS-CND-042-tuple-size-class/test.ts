import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleSize } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleSize<[]>,
      "empty"
    >
  >,
  Expect<
    Equal<
      TupleSize<readonly [string]>,
      "single"
    >
  >,
  Expect<
    Equal<
      TupleSize<[1, 2]>,
      "many"
    >
  >,
];

export type TestCases = Cases;
