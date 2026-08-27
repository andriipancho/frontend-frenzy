import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { compose } from "./task.js";

const describeLength = compose(
  (value: string) => value.length,
  (length: number) => ({ length }),
);
type Cases = [
  Expect<
    Equal<
      typeof describeLength,
      (value: string) => { length: number }
    >
  >,
];
export type TestCases = Cases;
