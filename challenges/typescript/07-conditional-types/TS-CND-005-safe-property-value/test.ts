import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PropertyValue<{ id: string }, "id">,
      string
    >
  >,
  Expect<
    Equal<
      PropertyValue<{ id: string }, "missing">,
      never
    >
  >,
  Expect<
    Equal<
      PropertyValue<{ 0: boolean }, 0>,
      boolean
    >
  >,
];

export type TestCases = Cases;
