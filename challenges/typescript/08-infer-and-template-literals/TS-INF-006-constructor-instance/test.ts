import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Constructed } from "./task.js";

type Cases = [
  Expect<
    Equal<
      Constructed<typeof Date>,
      Date
    >
  >,
  Expect<
    Equal<
      Constructed<{ new (id: string): { id: string } }>,
      { id: string }
    >
  >,
  Expect<
    Equal<
      Constructed<() => void>,
      never
    >
  >,
];

export type TestCases = Cases;
