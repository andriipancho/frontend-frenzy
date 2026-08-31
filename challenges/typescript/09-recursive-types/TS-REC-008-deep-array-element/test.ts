import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepElement } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepElement<string[][][]>,
      string
    >
  >,
  Expect<
    Equal<
      DeepElement<readonly (readonly [1,2])[]>,
      1|2
    >
  >,
  Expect<
    Equal<
      DeepElement<Date>,
      Date
    >
  >,
];

export type TestCases = Cases;
