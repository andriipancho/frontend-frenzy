import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { BoxedValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      BoxedValue<{ value: string }>,
      string
    >
  >,
  Expect<
    Equal<
      BoxedValue<{ value: 42; label: string }>,
      42
    >
  >,
  Expect<
    Equal<
      BoxedValue<{ data: string }>,
      never
    >
  >,
];

export type TestCases = Cases;
