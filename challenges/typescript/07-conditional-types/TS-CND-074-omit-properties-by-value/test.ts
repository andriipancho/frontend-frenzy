import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { OmitByValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      OmitByValue<{ id: string; count: number; name: string }, string>,
      { count: number }
    >
  >,
  Expect<
    Equal<
      OmitByValue<{ active: boolean; count: number }, Date>,
      { active: boolean; count: number }
    >
  >,
];

export type TestCases = Cases;
