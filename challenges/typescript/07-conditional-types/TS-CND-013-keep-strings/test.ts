import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KeepStrings } from "./task.js";

type Cases = [
  Expect<
    Equal<
      KeepStrings<"a" | 1 | "b" | false>,
      "a" | "b"
    >
  >,
  Expect<
    Equal<
      KeepStrings<number | null>,
      never
    >
  >,
];

export type TestCases = Cases;
