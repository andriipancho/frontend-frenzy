import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ElementOrSelf } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ElementOrSelf<string[]>,
      string
    >
  >,
  Expect<
    Equal<
      ElementOrSelf<readonly [1, 2]>,
      1 | 2
    >
  >,
  Expect<
    Equal<
      ElementOrSelf<Date>,
      Date
    >
  >,
];

export type TestCases = Cases;
