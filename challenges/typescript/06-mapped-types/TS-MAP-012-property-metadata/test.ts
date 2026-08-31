import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyMetadata } from "./task.js";

type Expected = { email: { value: string; dirty: boolean; touched: boolean }; age: { value: number; dirty: boolean; touched: boolean } };
type Cases = [Expect<Equal<PropertyMetadata<{ email: string; age: number }>, Expected>>];
export type TestCases = Cases;
