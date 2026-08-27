import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { metrics, type Metric } from "./task.js";

type Cases = [Expect<Equal<typeof metrics, Metric[]>>];
const latency: number = metrics[0]?.value ?? 0;
void latency;
export type TestCases = Cases;
