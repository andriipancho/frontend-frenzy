import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AsReadonlyCollection } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AsReadonlyCollection<string>,
      readonly string[]
    >
  >,
  Expect<
    Equal<
      AsReadonlyCollection<readonly [1, 2]>,
      readonly [1, 2]
    >
  >,
  Expect<
    Equal<
      AsReadonlyCollection<number[]>,
      number[]
    >
  >,
];

export type TestCases = Cases;
