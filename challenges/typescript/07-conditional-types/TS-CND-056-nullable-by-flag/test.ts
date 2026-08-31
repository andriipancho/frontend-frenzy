import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NullableIf } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NullableIf<string, true>,
      string | null
    >
  >,
  Expect<
    Equal<
      NullableIf<number, false>,
      number
    >
  >,
  Expect<
    Equal<
      NullableIf<boolean, boolean>,
      boolean | null
    >
  >,
];

export type TestCases = Cases;
