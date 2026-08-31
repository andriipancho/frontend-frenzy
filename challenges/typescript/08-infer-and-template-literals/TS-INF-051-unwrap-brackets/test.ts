import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnwrapBrackets } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UnwrapBrackets<"[userId]">,
      "userId"
    >
  >,
  Expect<
    Equal<
      UnwrapBrackets<"[[nested]]">,
      "[nested]"
    >
  >,
  Expect<
    Equal<
      UnwrapBrackets<"plain">,
      "plain"
    >
  >,
];

export type TestCases = Cases;
