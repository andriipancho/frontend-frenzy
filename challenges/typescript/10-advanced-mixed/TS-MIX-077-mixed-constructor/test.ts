import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedInstance } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedInstance<typeof Date>,
      Date
    >
  >,
];
export type TestCases = Cases;
