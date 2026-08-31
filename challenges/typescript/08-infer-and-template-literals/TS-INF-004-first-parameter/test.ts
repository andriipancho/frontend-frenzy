import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FirstParameter } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FirstParameter<(id: string, force: boolean) => void>,
      string
    >
  >,
  Expect<
    Equal<
      FirstParameter<(value: { id: number }) => number>,
      { id: number }
    >
  >,
  Expect<
    Equal<
      FirstParameter<() => void>,
      never
    >
  >,
];

export type TestCases = Cases;
