import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LogArguments } from "./task.js";

type Expected = [
  level: "info" | "error",
  message: string,
  context?: Record<string, unknown>,
];
type Cases = [Expect<Equal<LogArguments, Expected>>];
export type TestCases = Cases;
