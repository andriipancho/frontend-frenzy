import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Dictionary } from "./task.js";

type Cases = [
  Expect<Equal<
    Dictionary<"left" | "right", number>,
    { left: number; right: number }
  >>,
  Expect<Equal<
    keyof Dictionary<1 | 2, string>,
    1 | 2
  >>,
];
export type TestCases = Cases;
