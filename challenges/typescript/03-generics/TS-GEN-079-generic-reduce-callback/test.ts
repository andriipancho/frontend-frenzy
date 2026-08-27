import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { reduceValues } from "./task.js";

const total = reduceValues(
  [{ amount: 2 }, { amount: 5 }],
  0,
  (sum: number, item: { amount: number }) => sum + item.amount,
);
type Cases = [Expect<Equal<typeof total, number>>];
export type TestCases = Cases;
