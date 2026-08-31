import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FunctionResult } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FunctionResult<(id: string) => number>,
      number
    >
  >,
  Expect<
    Equal<
      FunctionResult<() => { ok: true }>,
      { ok: true }
    >
  >,
  Expect<
    Equal<
      FunctionResult<string>,
      never
    >
  >,
];

export type TestCases = Cases;
