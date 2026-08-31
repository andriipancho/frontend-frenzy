import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { BooleanLabel } from "./task.js";

type Cases = [
  Expect<
    Equal<
      BooleanLabel<true>,
      "enabled"
    >
  >,
  Expect<
    Equal<
      BooleanLabel<false>,
      "disabled"
    >
  >,
  Expect<
    Equal<
      BooleanLabel<boolean>,
      "enabled" | "disabled"
    >
  >,
];

export type TestCases = Cases;
