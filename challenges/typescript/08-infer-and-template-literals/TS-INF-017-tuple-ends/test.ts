import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleEnds } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleEnds<[string, number, boolean]>,
      [string, boolean]
    >
  >,
  Expect<
    Equal<
      TupleEnds<readonly [1, 2]>,
      [1, 2]
    >
  >,
  Expect<
    Equal<
      TupleEnds<[1]>,
      never
    >
  >,
];

export type TestCases = Cases;
