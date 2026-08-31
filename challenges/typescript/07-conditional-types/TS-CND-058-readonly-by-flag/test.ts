import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ReadonlyIf } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ReadonlyIf<{ id: string }, true>,
      { readonly id: string }
    >
  >,
  Expect<
    Equal<
      ReadonlyIf<{ id: string }, false>,
      { id: string }
    >
  >,
];

export type TestCases = Cases;
