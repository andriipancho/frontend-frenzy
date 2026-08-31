import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyPartial } from "./task.js";

type Source = { id: string; active: boolean };
type Cases = [
  Expect<Equal<
    MyPartial<Source>,
    { id?: string; active?: boolean }
  >>,
];
export type TestCases = Cases;
