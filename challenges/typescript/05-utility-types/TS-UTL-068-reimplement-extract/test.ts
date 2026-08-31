import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyExtract } from "./task.js";

type Cases = [
  Expect<Equal<
    MyExtract<string | number | (() => void), Function>,
    () => void
  >>,
];
export type TestCases = Cases;
