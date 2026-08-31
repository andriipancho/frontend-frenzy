import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TextOrNumber } from "./task.js";

type Cases = [Expect<Equal<TextOrNumber, string | number>>];
export type TestCases = Cases;
