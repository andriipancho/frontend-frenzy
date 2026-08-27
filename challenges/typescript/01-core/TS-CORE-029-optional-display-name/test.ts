import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Account } from "./task.js";

type Expected = { id: string; displayName?: string };
type Cases = [Expect<Equal<Account, Expected>>];
const minimal: Account = { id: "a1" };
const named: Account = { id: "a2", displayName: "Primary" };
void minimal;
void named;
export type TestCases = Cases;
