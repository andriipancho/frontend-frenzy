import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Transformer } from "./task.js";

type Expected = { transform(value: string): number };
type Cases = [Expect<Equal<Transformer<string, number>, Expected>>];
export type TestCases = Cases;
