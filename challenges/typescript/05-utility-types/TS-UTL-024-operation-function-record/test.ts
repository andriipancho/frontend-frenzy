import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { OperationFn, Operations } from "./task.js";

type Expected = {
  increment: OperationFn;
  decrement: OperationFn;
  reset: OperationFn;
};
type Cases = [Expect<Equal<Operations, Expected>>];
export type TestCases = Cases;
