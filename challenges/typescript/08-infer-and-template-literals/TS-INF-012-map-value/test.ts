import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MapValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MapValue<Map<string, number>>,
      number
    >
  >,
  Expect<
    Equal<
      MapValue<ReadonlyMap<number, { id: string }>>,
      { id: string }
    >
  >,
  Expect<
    Equal<
      MapValue<Set<string>>,
      never
    >
  >,
];

export type TestCases = Cases;
