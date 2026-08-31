import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyRecord } from "./task.js";

type Cases = [
  Expect<Equal<
    MyRecord<"left" | "right", number>,
    { left: number; right: number }
  >>,
  Expect<Equal<keyof MyRecord<1 | 2, string>, 1 | 2>>,
];
export type TestCases = Cases;
