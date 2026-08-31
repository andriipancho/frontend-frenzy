import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FilterAssignable } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FilterAssignable<"a" | 1 | "b", string>,
      "a" | "b"
    >
  >,
  Expect<
    Equal<
      FilterAssignable<{ id: string } | { name: string }, { id: string }>,
      { id: string }
    >
  >,
];

export type TestCases = Cases;
