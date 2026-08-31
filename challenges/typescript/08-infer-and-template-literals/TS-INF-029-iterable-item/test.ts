import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IterableItem } from "./task.js";

type Cases = [
  Expect<
    Equal<
      IterableItem<Set<string>>,
      string
    >
  >,
  Expect<
    Equal<
      IterableItem<readonly [1, 2]>,
      1 | 2
    >
  >,
  Expect<
    Equal<
      IterableItem<{ value: string }>,
      never
    >
  >,
];

export type TestCases = Cases;
