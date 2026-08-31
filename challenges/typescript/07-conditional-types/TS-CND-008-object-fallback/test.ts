import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ObjectOr } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ObjectOr<{ id: string }, null>,
      { id: string }
    >
  >,
  Expect<
    Equal<
      ObjectOr<string, { empty: true }>,
      { empty: true }
    >
  >,
  Expect<
    Equal<
      ObjectOr<() => void, never>,
      () => void
    >
  >,
];

export type TestCases = Cases;
