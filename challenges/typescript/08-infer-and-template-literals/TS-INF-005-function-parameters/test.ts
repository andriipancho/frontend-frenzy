import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParameterTuple } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParameterTuple<(id: string, force?: boolean) => void>,
      [id: string, force?: boolean]
    >
  >,
  Expect<
    Equal<
      ParameterTuple<() => number>,
      []
    >
  >,
  Expect<
    Equal<
      ParameterTuple<string>,
      never
    >
  >,
];

export type TestCases = Cases;
