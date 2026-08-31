import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SetterValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SetterValue<{ set: (value: string) => void }>,
      string
    >
  >,
  Expect<
    Equal<
      SetterValue<{ set: (value: { id: number }) => boolean }>,
      { id: number }
    >
  >,
  Expect<
    Equal<
      SetterValue<{ value: string }>,
      never
    >
  >,
];

export type TestCases = Cases;
