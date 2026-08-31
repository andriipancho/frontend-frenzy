import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NormalizedId } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NormalizedId<"user-1">,
      string
    >
  >,
  Expect<
    Equal<
      NormalizedId<42>,
      number
    >
  >,
  Expect<
    Equal<
      NormalizedId<boolean>,
      never
    >
  >,
];

export type TestCases = Cases;
