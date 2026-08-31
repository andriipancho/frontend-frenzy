import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AuditEntry } from "./task.js";

type Expected = { at: Date; action: string };
type Cases = [Expect<Equal<AuditEntry, Expected>>];
export type TestCases = Cases;
