import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Selection } from "./task.js";

type Expected = string | string[];
type Cases = [Expect<Equal<Selection, Expected>>];
const one: Selection = "primary";
const many: Selection = ["primary", "secondary"];
void one; void many;
