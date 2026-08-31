import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NonEmptyTuple } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NonEmptyTuple<[]>,
      never
    >
  >,
  Expect<
    Equal<
      NonEmptyTuple<readonly [1]>,
      readonly [1]
    >
  >,
  Expect<
    Equal<
      NonEmptyTuple<[string, number]>,
      [string, number]
    >
  >,
];

export type TestCases = Cases;
