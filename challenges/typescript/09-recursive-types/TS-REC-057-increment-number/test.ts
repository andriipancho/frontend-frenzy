import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Increment } from "./task.js";

type Cases = [
  Expect<
    Equal<
      Increment<0>,
      1
    >
  >,
  Expect<
    Equal<
      Increment<3>,
      4
    >
  >,
  Expect<
    Equal<
      Increment<7>,
      8
    >
  >,
];

export type TestCases = Cases;
