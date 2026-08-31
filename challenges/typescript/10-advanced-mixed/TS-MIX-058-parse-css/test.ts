import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseCssVariable } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseCssVariable<"--surface-color">,
      "surface-color"
    >
  >,
];
export type TestCases = Cases;
