import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { reduceCounter } from "./task.js";

reduceCounter(2, { type: "increment", amount: 3 });
reduceCounter(2, { type: "decrement", amount: 1 });
reduceCounter(2, { type: "reset" });

// @ts-expect-error the declared parameter type must not widen
reduceCounter(2, { type: "double" });

type Cases = [
  Expect<Equal<Parameters<typeof reduceCounter>, [number, { type: "increment"; amount: number } | { type: "decrement"; amount: number } | { type: "reset" }]>>,
  Expect<Equal<ReturnType<typeof reduceCounter>, number>>,
];

export type TestCases = Cases;
