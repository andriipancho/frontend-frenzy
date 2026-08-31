import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NoneExtend } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NoneExtend<1 | 2, string>,
      true
    >
  >,
  Expect<
    Equal<
      NoneExtend<1 | "x", string>,
      false
    >
  >,
  Expect<
    Equal<
      NoneExtend<never, string>,
      true
    >
  >,
];

export type TestCases = Cases;
