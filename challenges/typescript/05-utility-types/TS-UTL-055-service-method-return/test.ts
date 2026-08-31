import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { HealthResult } from "./task.js";

type Expected = { healthy: boolean; checkedAt: Date };
type Cases = [Expect<Equal<HealthResult, Expected>>];
export type TestCases = Cases;
