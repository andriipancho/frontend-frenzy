import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { WholeUnionOr } from "./task.js";

type Cases = [
  Expect<
    Equal<
      WholeUnionOr<"a" | "b", string, null>,
      "a" | "b"
    >
  >,
  Expect<
    Equal<
      WholeUnionOr<"a" | 1, string, null>,
      null
    >
  >,
];

export type TestCases = Cases;
