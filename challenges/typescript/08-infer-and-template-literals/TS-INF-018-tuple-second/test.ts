import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleSecond } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleSecond<[string, number, boolean]>,
      number
    >
  >,
  Expect<
    Equal<
      TupleSecond<readonly [1, 2]>,
      2
    >
  >,
  Expect<
    Equal<
      TupleSecond<[1]>,
      never
    >
  >,
];

export type TestCases = Cases;
