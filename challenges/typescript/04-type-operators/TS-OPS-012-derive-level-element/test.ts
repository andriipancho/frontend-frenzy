import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LogLevel } from "./task.js";

type Cases = [Expect<Equal<LogLevel, "info" | "warning" | "error">>];
export type TestCases = Cases;
