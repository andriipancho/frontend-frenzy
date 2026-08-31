import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyRequired } from "./task.js";

type Source = { id?: string; active?: boolean };
type Cases = [
  Expect<Equal<
    MyRequired<Source>,
    { id: string; active: boolean }
  >>,
];
export type TestCases = Cases;
