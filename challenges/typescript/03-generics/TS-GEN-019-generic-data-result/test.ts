import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DataResult } from "./task.js";

type Expected = { ok: true; data: number } | { ok: false; error: string };
type Cases = [Expect<Equal<DataResult<number>, Expected>>];
export type TestCases = Cases;
