import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LogLevel } from "./task.js";

type Expected = "debug" | "info" | "warn" | "error";
type Cases = [Expect<Equal<LogLevel, Expected>>];
const level: LogLevel = "warn";
// @ts-expect-error unsupported level
const invalid: LogLevel = "fatal";
void level; void invalid;
