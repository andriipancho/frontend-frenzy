import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CallbackInput } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CallbackInput<(callback: (value: string) => void) => void>,
      string
    >
  >,
  Expect<
    Equal<
      CallbackInput<(callback: (value: { id: number }) => void) => Promise<void>>,
      { id: number }
    >
  >,
  Expect<
    Equal<
      CallbackInput<(value: string) => void>,
      never
    >
  >,
];

export type TestCases = Cases;
