import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SplitOnce } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SplitOnce<"user:42", ":">,
      ["user", "42"]
    >
  >,
  Expect<
    Equal<
      SplitOnce<"plain", ":">,
      ["plain"]
    >
  >,
  Expect<
    Equal<
      SplitOnce<"a=b=c", "=">,
      ["a", "b=c"]
    >
  >,
];

export type TestCases = Cases;
