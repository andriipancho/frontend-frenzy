import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IsAssignable } from "./task.js";

type Cases = [
  Expect<
    Equal<
      IsAssignable<"draft", string>,
      true
    >
  >,
  Expect<
    Equal<
      IsAssignable<number, string>,
      false
    >
  >,
  Expect<
    Equal<
      IsAssignable<1 | "x", number>,
      boolean
    >
  >,
];

export type TestCases = Cases;
