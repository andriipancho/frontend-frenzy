import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AllExtend } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AllExtend<"a" | "b", string>,
      true
    >
  >,
  Expect<
    Equal<
      AllExtend<"a" | 1, string>,
      false
    >
  >,
  Expect<
    Equal<
      AllExtend<never, string>,
      true
    >
  >,
];

export type TestCases = Cases;
