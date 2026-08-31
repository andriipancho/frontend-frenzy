import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LiteralMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      LiteralMembers<"x" | 1 | { id: string }>,
      "x" | 1 | { id: string }
    >
  >,
  Expect<
    Equal<
      LiteralMembers<string | 1>,
      1
    >
  >,
  Expect<
    Equal<
      LiteralMembers<number | false>,
      false
    >
  >,
];

export type TestCases = Cases;
