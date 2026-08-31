import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { WithoutStrings } from "./task.js";

type Cases = [
  Expect<
    Equal<
      WithoutStrings<"a" | 1 | false>,
      1 | false
    >
  >,
  Expect<
    Equal<
      WithoutStrings<string>,
      never
    >
  >,
];

export type TestCases = Cases;
