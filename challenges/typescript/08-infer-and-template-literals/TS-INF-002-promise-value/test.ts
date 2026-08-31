import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PromiseValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PromiseValue<Promise<string>>,
      string
    >
  >,
  Expect<
    Equal<
      PromiseValue<PromiseLike<{ id: string }>>,
      { id: string }
    >
  >,
  Expect<
    Equal<
      PromiseValue<number>,
      never
    >
  >,
];

export type TestCases = Cases;
