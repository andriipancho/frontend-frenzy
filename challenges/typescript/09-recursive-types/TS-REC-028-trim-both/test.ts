import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TrimText } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TrimText<"  value  ">,
      "value"
    >
  >,
  Expect<
    Equal<
      TrimText<"value">,
      "value"
    >
  >,
  Expect<
    Equal<
      TrimText<"   ">,
      ""
    >
  >,
];

export type TestCases = Cases;
