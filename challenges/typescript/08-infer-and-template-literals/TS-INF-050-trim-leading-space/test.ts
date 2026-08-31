import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TrimLeadingSpace } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TrimLeadingSpace<" value">,
      "value"
    >
  >,
  Expect<
    Equal<
      TrimLeadingSpace<"  value">,
      " value"
    >
  >,
  Expect<
    Equal<
      TrimLeadingSpace<"value">,
      "value"
    >
  >,
];

export type TestCases = Cases;
