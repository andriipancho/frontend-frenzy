import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TrimEnd } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TrimEnd<"value   ">,
      "value"
    >
  >,
  Expect<
    Equal<
      TrimEnd<"value">,
      "value"
    >
  >,
  Expect<
    Equal<
      TrimEnd<"  ">,
      ""
    >
  >,
];

export type TestCases = Cases;
