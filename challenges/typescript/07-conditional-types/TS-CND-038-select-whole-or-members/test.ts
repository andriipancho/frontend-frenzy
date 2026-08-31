import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SelectMode } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SelectMode<"a" | 1, string, true>,
      never
    >
  >,
  Expect<
    Equal<
      SelectMode<"a" | 1, string, false>,
      "a"
    >
  >,
  Expect<
    Equal<
      SelectMode<"a" | "b", string, true>,
      "a" | "b"
    >
  >,
];

export type TestCases = Cases;
