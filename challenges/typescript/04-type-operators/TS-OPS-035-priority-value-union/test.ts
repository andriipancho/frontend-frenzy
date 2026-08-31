import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Priority } from "./task.js";

type Cases = [Expect<Equal<Priority, 1 | 2 | 3>>];
export type TestCases = Cases;
