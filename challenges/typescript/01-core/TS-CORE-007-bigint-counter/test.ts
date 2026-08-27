import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { initialCounter, type Counter } from "./task.js";

type Cases = [
  Expect<Equal<Counter, bigint>>,
  Expect<Equal<typeof initialCounter, bigint>>,
];

const next: Counter = initialCounter + 1n;
void next;

export type TestCases = Cases;
