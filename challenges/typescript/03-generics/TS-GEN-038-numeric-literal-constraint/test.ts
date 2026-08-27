import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { keepNumber } from "./task.js";

const value = keepNumber(42 as const);
type Cases = [Expect<Equal<typeof value, 42>>];
// @ts-expect-error only numbers are accepted
keepNumber("42");
export type TestCases = Cases;
