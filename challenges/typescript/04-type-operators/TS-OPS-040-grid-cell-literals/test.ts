import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { GridCell } from "./task.js";

type Cases = [Expect<Equal<GridCell, 0 | 1 | 2 | 3>>];
export type TestCases = Cases;
