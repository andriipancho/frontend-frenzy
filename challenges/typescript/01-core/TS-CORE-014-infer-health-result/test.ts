import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { healthCheck } from "./task.js";

const result = healthCheck();

type Cases = [
  Expect<Equal<typeof result.healthy, boolean>>,
  Expect<Equal<typeof result.latencyMs, number>>,
];

export type TestCases = Cases;
