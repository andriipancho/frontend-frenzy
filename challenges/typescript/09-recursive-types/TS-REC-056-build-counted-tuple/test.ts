import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { BuildTuple } from "./task.js";

type Cases = [
  Expect<
    Equal<
      BuildTuple<3>,
      [unknown,unknown,unknown]
    >
  >,
  Expect<
    Equal<
      BuildTuple<1>,
      [unknown]
    >
  >,
  Expect<
    Equal<
      BuildTuple<0>,
      []
    >
  >,
];

export type TestCases = Cases;
