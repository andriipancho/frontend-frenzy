import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ArrayPerMember } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ArrayPerMember<string | number>,
      string[] | number[]
    >
  >,
  Expect<
    Equal<
      ArrayPerMember<never>,
      never
    >
  >,
];

export type TestCases = Cases;
