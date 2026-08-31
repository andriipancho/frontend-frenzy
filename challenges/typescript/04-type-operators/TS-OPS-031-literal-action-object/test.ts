import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { incrementAction } from "./task.js";

type Expected = {
  readonly type: "counter/increment";
  readonly amount: 1;
};
type Cases = [Expect<Equal<typeof incrementAction, Expected>>];
// @ts-expect-error action must be readonly
incrementAction.amount = 2;
export type TestCases = Cases;
