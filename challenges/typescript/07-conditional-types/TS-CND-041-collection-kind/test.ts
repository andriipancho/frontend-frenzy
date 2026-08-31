import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CollectionKind } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CollectionKind<readonly string[]>,
      "array"
    >
  >,
  Expect<
    Equal<
      CollectionKind<Map<string, number>>,
      "map"
    >
  >,
  Expect<
    Equal<
      CollectionKind<Set<Date> | string>,
      "set" | "other"
    >
  >,
];

export type TestCases = Cases;
