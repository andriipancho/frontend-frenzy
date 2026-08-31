import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedLast } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedLast<[1,"a",true]>,
      true
    >
  >,
];
export type TestCases = Cases;
