import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CompatibleUpdate } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CompatibleUpdate<string, "ready">,
      "ready"
    >
  >,
  Expect<
    Equal<
      CompatibleUpdate<{ id: string }, { name: string }>,
      { id: string }
    >
  >,
  Expect<
    Equal<
      CompatibleUpdate<number, 1 | "x">,
      number
    >
  >,
];

export type TestCases = Cases;
