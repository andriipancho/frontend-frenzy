import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { average } from "./task.js";

type Cases = [Expect<Equal<Parameters<typeof average>, [values: readonly number[]]>>];
average([2, 4, 6]);
average([2, 4, 6] as const);
export type TestCases = Cases;
