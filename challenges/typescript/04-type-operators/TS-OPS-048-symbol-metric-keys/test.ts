import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { latencyMetric } from "./task.js";
import type { MetricKey } from "./task.js";

type Cases = [Expect<Equal<MetricKey, "requests" | typeof latencyMetric>>];
export type TestCases = Cases;
