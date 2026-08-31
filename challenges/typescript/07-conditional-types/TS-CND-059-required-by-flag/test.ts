import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RequiredIf } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RequiredIf<{ id?: string; active?: boolean }, true>,
      { id: string; active: boolean }
    >
  >,
  Expect<
    Equal<
      RequiredIf<{ id?: string }, false>,
      { id?: string }
    >
  >,
];

export type TestCases = Cases;
