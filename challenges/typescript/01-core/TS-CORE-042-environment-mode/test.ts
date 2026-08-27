import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Environment } from "./task.js";

type Expected = "development" | "staging" | "production";
type Cases = [Expect<Equal<Environment, Expected>>];
const environment: Environment = "production";
// @ts-expect-error abbreviations are not supported
const invalid: Environment = "prod";
void environment;
void invalid;
export type TestCases = Cases;
