import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LookupResult } from "./task.js";

type Cases = [Expect<Equal<LookupResult, string | number | null>>];
export type TestCases = Cases;
