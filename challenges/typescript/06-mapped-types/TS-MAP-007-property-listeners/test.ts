import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyListeners } from "./task.js";

type Expected = { name: (value: string) => void; score: (value: number) => void };
type Cases = [Expect<Equal<PropertyListeners<{ name: string; score: number }>, Expected>>];
export type TestCases = Cases;
