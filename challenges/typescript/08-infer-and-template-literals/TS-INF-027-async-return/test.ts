import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AsyncReturn } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AsyncReturn<(id: string) => Promise<{ id: string }>>,
      { id: string }
    >
  >,
  Expect<
    Equal<
      AsyncReturn<() => Promise<"ready">>,
      "ready"
    >
  >,
  Expect<
    Equal<
      AsyncReturn<() => string>,
      never
    >
  >,
];

export type TestCases = Cases;
