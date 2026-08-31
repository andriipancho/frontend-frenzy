import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CssVariable } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CssVariable<"surface-color">,
      "--surface-color"
    >
  >,
  Expect<
    Equal<
      CssVariable<"spacing" | "radius">,
      "--spacing" | "--radius"
    >
  >,
];

export type TestCases = Cases;
