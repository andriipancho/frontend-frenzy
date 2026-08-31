import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SameMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SameMembers<"a" | "b", "b" | "a">,
      true
    >
  >,
  Expect<
    Equal<
      SameMembers<"a", "a" | "b">,
      false
    >
  >,
  Expect<
    Equal<
      SameMembers<never, never>,
      true
    >
  >,
];

export type TestCases = Cases;
