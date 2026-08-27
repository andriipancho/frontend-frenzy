import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Dictionary } from "./task.js";

type Expected = { [key: string]: boolean };
type Cases = [Expect<Equal<Dictionary<boolean>, Expected>>];
export type TestCases = Cases;
