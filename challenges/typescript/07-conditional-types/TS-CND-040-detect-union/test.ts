import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IsUnion } from "./task.js";

type Cases = [
  Expect<
    Equal<
      IsUnion<string>,
      false
    >
  >,
  Expect<
    Equal<
      IsUnion<string | number>,
      true
    >
  >,
  Expect<
    Equal<
      IsUnion<never>,
      never
    >
  >,
];

export type TestCases = Cases;
