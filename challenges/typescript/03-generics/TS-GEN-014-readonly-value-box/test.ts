import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { readonlyValue } from "./task.js";

const result = readonlyValue(7 as const);
type Cases = [Expect<Equal<typeof result, { readonly value: 7 }>>];
export type TestCases = Cases;
