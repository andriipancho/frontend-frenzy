import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleInit } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleInit<[string, number, boolean]>,
      [string, number]
    >
  >,
  Expect<
    Equal<
      TupleInit<readonly [1]>,
      []
    >
  >,
  Expect<
    Equal<
      TupleInit<[]>,
      []
    >
  >,
];

export type TestCases = Cases;
