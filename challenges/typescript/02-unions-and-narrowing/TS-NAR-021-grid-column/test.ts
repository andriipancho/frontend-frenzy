import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { GridColumn } from "./task.js";

type Expected = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Cases = [Expect<Equal<GridColumn, Expected>>];
const column: GridColumn = 12;
// @ts-expect-error columns start at one
const invalid: GridColumn = 0;
void column; void invalid;
