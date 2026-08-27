import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Box } from "./task.js";

type Cases = [Expect<Equal<Box<string>, { value: string }>>];
export type TestCases = Cases;
