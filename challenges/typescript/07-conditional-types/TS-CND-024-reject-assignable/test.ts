import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RejectAssignable } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RejectAssignable<"a" | 1 | false, string>,
      1 | false
    >
  >,
  Expect<
    Equal<
      RejectAssignable<{ id: string } | { name: string }, { id: string }>,
      { name: string }
    >
  >,
];

export type TestCases = Cases;
