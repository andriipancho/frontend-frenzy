import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NullabilityFlags } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NullabilityFlags<{ id: string; name: string | null; note: null }>,
      { id: false; name: true; note: true }
    >
  >,
  Expect<
    Equal<
      NullabilityFlags<{}>,
      {}
    >
  >,
];

export type TestCases = Cases;
