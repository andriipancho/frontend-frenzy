import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyNonNullable } from "./task.js";

type Cases = [
  Expect<Equal<
    MyNonNullable<string | number | null | undefined>,
    string | number
  >>,
];
export type TestCases = Cases;
