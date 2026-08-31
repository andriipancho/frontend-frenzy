import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MetricCell } from "./task.js";

type Cases = [Expect<Equal<MetricCell, string | number | boolean>>];
export type TestCases = Cases;
