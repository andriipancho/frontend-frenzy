import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PropertyKeys<"id" | 0 | symbol | { id: string }>,
      "id" | 0 | symbol
    >
  >,
  Expect<
    Equal<
      PropertyKeys<Date | null>,
      never
    >
  >,
];

export type TestCases = Cases;
