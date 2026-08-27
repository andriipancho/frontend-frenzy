import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { JobState } from "./task.js";

type Expected =
  | { status: "queued" }
  | { status: "running"; startedAt: Date }
  | { status: "completed"; result: string; finishedAt: Date }
  | { status: "failed"; error: string; finishedAt: Date };
type Cases = [Expect<Equal<JobState, Expected>>];
// @ts-expect-error completed jobs require result and finish time
const invalid: JobState = { status: "completed" };
void invalid;
export type TestCases = Cases;
