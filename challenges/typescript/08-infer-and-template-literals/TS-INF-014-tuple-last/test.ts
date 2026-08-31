import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleLast } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleLast<[string, number, boolean]>,
      boolean
    >
  >,
  Expect<
    Equal<
      TupleLast<readonly [1]>,
      1
    >
  >,
  Expect<
    Equal<
      TupleLast<[]>,
      never
    >
  >,
];

export type TestCases = Cases;
