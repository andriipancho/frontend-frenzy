import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { GeneratorYield } from "./task.js";

type Cases = [
  Expect<
    Equal<
      GeneratorYield<Generator<string, void, unknown>>,
      string
    >
  >,
  Expect<
    Equal<
      GeneratorYield<Generator<1 | 2, boolean, string>>,
      1 | 2
    >
  >,
  Expect<
    Equal<
      GeneratorYield<Iterable<string>>,
      never
    >
  >,
];

export type TestCases = Cases;
