import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FunctionPerMember } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FunctionPerMember<string | number>,
      ((value: string) => void) | ((value: number) => void)
    >
  >,
  Expect<
    Equal<
      FunctionPerMember<never>,
      never
    >
  >,
];

export type TestCases = Cases;
