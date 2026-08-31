import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MapKey } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MapKey<Map<string, number>>,
      string
    >
  >,
  Expect<
    Equal<
      MapKey<ReadonlyMap<1 | 2, Date>>,
      1 | 2
    >
  >,
  Expect<
    Equal<
      MapKey<Set<string>>,
      never
    >
  >,
];

export type TestCases = Cases;
