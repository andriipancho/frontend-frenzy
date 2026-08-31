import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyExclude } from "./task.js";

type Cases = [
  Expect<Equal<
    MyExclude<string | number | null, null | number>,
    string
  >>,
];
export type TestCases = Cases;
