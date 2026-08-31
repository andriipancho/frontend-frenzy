import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ContentValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ContentValue<readonly number[]>,
      number
    >
  >,
  Expect<
    Equal<
      ContentValue<Promise<{ id: string }>>,
      { id: string }
    >
  >,
  Expect<
    Equal<
      ContentValue<string>,
      never
    >
  >,
];

export type TestCases = Cases;
