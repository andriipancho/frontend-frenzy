import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyLookup } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PropertyLookup<{ id: string }, "id">,
      { found: true; value: string }
    >
  >,
  Expect<
    Equal<
      PropertyLookup<{ id: string }, "name">,
      { found: false; key: "name" }
    >
  >,
];

export type TestCases = Cases;
