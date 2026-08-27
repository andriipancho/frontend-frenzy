import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SearchValue } from "./task.js";

type Expected = string | number | boolean;
type Cases = [Expect<Equal<SearchValue, Expected>>];
const values: SearchValue[] = ["open", 3, true];
void values;
