import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { QueuedJobArguments } from "./task.js";

type Expected = readonly [
  id: string,
  attempts: number,
  priority?: "low" | "high",
];
type Cases = [Expect<Equal<QueuedJobArguments, Expected>>];
export type TestCases = Cases;
