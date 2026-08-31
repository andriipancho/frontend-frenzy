import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ElementsOr } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ElementsOr<readonly [1, 2], never>,
      1 | 2
    >
  >,
  Expect<
    Equal<
      ElementsOr<string[], null>,
      string
    >
  >,
  Expect<
    Equal<
      ElementsOr<Date, "not-array">,
      "not-array"
    >
  >,
];

export type TestCases = Cases;
