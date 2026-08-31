import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { WithKey } from "./task.js";

type Cases = [
  Expect<
    Equal<
      WithKey<{ id: string } | { name: string } | { id: number; active: true }, "id">,
      { id: string } | { id: number; active: true }
    >
  >,
  Expect<
    Equal<
      WithKey<string | { length: 1 }, "missing">,
      never
    >
  >,
];

export type TestCases = Cases;
