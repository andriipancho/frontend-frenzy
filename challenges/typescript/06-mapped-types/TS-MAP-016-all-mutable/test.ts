import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Mutable } from "./task.js";

type Cases = [Expect<Equal<Mutable<{ readonly id: string; readonly active?: boolean }>, { id: string; active?: boolean }>>];
export type TestCases = Cases;
