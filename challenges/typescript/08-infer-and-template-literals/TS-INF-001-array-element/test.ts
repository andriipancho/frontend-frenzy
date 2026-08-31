import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ElementType } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ElementType<string[]>,
      string
    >
  >,
  Expect<
    Equal<
      ElementType<readonly [1, "two"]>,
      1 | "two"
    >
  >,
  Expect<
    Equal<
      ElementType<Date>,
      never
    >
  >,
];

export type TestCases = Cases;
