import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ArrayIf } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ArrayIf<string, true>,
      string[]
    >
  >,
  Expect<
    Equal<
      ArrayIf<number, false>,
      number
    >
  >,
  Expect<
    Equal<
      ArrayIf<Date, boolean>,
      Date | Date[]
    >
  >,
];

export type TestCases = Cases;
