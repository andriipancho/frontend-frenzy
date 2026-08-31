import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Validators } from "./task.js";

type Expected = { email: (value: string) => boolean; age: (value: number) => boolean };
type Cases = [Expect<Equal<Validators<{ email: string; age: number }>, Expected>>];
export type TestCases = Cases;
