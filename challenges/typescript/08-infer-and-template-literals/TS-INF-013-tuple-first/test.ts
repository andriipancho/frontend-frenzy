import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleFirst } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleFirst<[string, number]>,
      string
    >
  >,
  Expect<
    Equal<
      TupleFirst<readonly [1]>,
      1
    >
  >,
  Expect<
    Equal<
      TupleFirst<[]>,
      never
    >
  >,
];

export type TestCases = Cases;
