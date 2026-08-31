import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IsNever } from "./task.js";

type Cases = [
  Expect<
    Equal<
      IsNever<never>,
      true
    >
  >,
  Expect<
    Equal<
      IsNever<string>,
      false
    >
  >,
  Expect<
    Equal<
      IsNever<string | never>,
      false
    >
  >,
];

export type TestCases = Cases;
