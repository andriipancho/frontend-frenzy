import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SomeExtend } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SomeExtend<"a" | 1, string>,
      true
    >
  >,
  Expect<
    Equal<
      SomeExtend<1 | 2, string>,
      false
    >
  >,
  Expect<
    Equal<
      SomeExtend<never, string>,
      false
    >
  >,
];

export type TestCases = Cases;
