import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AsyncFunctionValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AsyncFunctionValue<(id: string) => Promise<number>>,
      number
    >
  >,
  Expect<
    Equal<
      AsyncFunctionValue<() => PromiseLike<{ ok: true }>>,
      { ok: true }
    >
  >,
  Expect<
    Equal<
      AsyncFunctionValue<() => string>,
      never
    >
  >,
];

export type TestCases = Cases;
