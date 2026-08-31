import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ScheduleOptions } from "./task.js";

type Expected = { delayMs: number; priority?: "low" | "high" };
type Cases = [Expect<Equal<ScheduleOptions, Expected>>];
export type TestCases = Cases;
