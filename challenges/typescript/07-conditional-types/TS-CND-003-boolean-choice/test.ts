import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { If } from "./task.js";

type Cases = [
  Expect<
    Equal<
      If<true, "yes", "no">,
      "yes"
    >
  >,
  Expect<
    Equal<
      If<false, 1, 0>,
      0
    >
  >,
  Expect<
    Equal<
      If<boolean, "left", "right">,
      "left" | "right"
    >
  >,
];

export type TestCases = Cases;
