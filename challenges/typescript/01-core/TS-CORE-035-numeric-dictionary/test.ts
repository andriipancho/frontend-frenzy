import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Counters } from "./task.js";

type Expected = { [name: string]: number };
type Cases = [Expect<Equal<Counters, Expected>>];
const counters: Counters = { success: 12, failure: 3 };
// @ts-expect-error counter values must be numeric
const invalid: Counters = { success: "12" };
void counters;
void invalid;
export type TestCases = Cases;
