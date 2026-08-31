import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SuffixedText } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SuffixedText<"user", "Id">,
      "userId"
    >
  >,
  Expect<
    Equal<
      SuffixedText<"avatar", ".png">,
      "avatar.png"
    >
  >,
];

export type TestCases = Cases;
