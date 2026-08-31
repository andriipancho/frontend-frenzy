import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Decrement } from "./task.js";

type Cases = [
  Expect<
    Equal<
      Decrement<0>,
      0
    >
  >,
  Expect<
    Equal<
      Decrement<1>,
      0
    >
  >,
  Expect<
    Equal<
      Decrement<5>,
      4
    >
  >,
];

export type TestCases = Cases;
