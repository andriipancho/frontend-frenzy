import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TrimStart } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TrimStart<"   value">,
      "value"
    >
  >,
  Expect<
    Equal<
      TrimStart<"value">,
      "value"
    >
  >,
  Expect<
    Equal<
      TrimStart<"  ">,
      ""
    >
  >,
];

export type TestCases = Cases;
