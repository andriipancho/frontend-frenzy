import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FormField } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FormField<boolean>,
      { kind: "checkbox"; initial: false } | { kind: "checkbox"; initial: true }
    >
  >,
  Expect<
    Equal<
      FormField<number>,
      { kind: "number"; initial: number; step: number }
    >
  >,
  Expect<
    Equal<
      FormField<readonly ["small", "large"]>,
      { kind: "select"; options: readonly ["small", "large"]; selected?: "small" | "large" }
    >
  >,
];

export type TestCases = Cases;
