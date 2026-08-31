import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StringLiterals } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StringLiterals<"draft" | 42 | "sent">,
      "draft" | "sent"
    >
  >,
  Expect<
    Equal<
      StringLiterals<string | 42>,
      never
    >
  >,
  Expect<
    Equal<
      StringLiterals<never>,
      never
    >
  >,
];

export type TestCases = Cases;
