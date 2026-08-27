import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Outcome } from "./task.js";

type Expected = { ok: true; data: number } | { ok: false; error: Error };
type Cases = [Expect<Equal<Outcome<number, Error>, Expected>>];
export type TestCases = Cases;
