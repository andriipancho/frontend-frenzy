import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { duplicate } from "./task.js";

const pair = duplicate(42 as const);
type Cases = [Expect<Equal<typeof pair, [42, 42]>>];
export type TestCases = Cases;
