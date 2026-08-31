import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { BoxWhole } from "./task.js";

type Cases = [
  Expect<
    Equal<
      BoxWhole<string | number>,
      { value: string | number }
    >
  >,
  Expect<
    Equal<
      BoxWhole<never>,
      { value: never }
    >
  >,
];

export type TestCases = Cases;
