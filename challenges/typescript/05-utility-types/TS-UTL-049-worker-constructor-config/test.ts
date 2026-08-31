import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { WorkerConfig } from "./task.js";

type Expected = { queue: string; concurrency: number };
type Cases = [Expect<Equal<WorkerConfig, Expected>>];
export type TestCases = Cases;
