import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MetricSnapshot } from "./task.js";

type Expected = {
  latency?: number;
  requests?: number;
  errors?: number;
};
type Cases = [Expect<Equal<MetricSnapshot, Expected>>];
export type TestCases = Cases;
