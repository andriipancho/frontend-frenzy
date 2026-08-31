import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { GetterValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      GetterValue<{ get: () => string }>,
      string
    >
  >,
  Expect<
    Equal<
      GetterValue<{ get: (id: number) => { id: number }; set: () => void }>,
      { id: number }
    >
  >,
  Expect<
    Equal<
      GetterValue<{ value: string }>,
      never
    >
  >,
];

export type TestCases = Cases;
