import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SettledValue, Operation } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SettledValue<Operation>,
      { id: string }
    >
  >,
];

export type TestCases = Cases;
