import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SuccessResult } from "./task.js";

type Expected = { status: "ok"; data: { id: string } };
type Cases = [Expect<Equal<SuccessResult, Expected>>];
export type TestCases = Cases;
