import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { repeat } from "./task.js";

const values = repeat(false as const, 3);
type Cases = [Expect<Equal<typeof values, false[]>>];
export type TestCases = Cases;
