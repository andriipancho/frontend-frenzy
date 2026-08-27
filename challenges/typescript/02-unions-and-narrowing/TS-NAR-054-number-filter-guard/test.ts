import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { isNumber } from "./task.js";

const numbers = [1, "2", 3, null].filter(isNumber);
type Cases = [Expect<Equal<typeof numbers, number[]>>];
export type TestCases = Cases;
