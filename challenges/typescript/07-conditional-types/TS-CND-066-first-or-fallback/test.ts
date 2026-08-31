import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FirstOr } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FirstOr<[], "none">,
      "none"
    >
  >,
  Expect<
    Equal<
      FirstOr<readonly ["id", number], null>,
      "id"
    >
  >,
  Expect<
    Equal<
      FirstOr<string[], false>,
      string
    >
  >,
];

export type TestCases = Cases;
