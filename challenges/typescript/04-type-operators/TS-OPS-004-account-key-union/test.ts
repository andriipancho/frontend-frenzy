import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AccountKey } from "./task.js";

type Cases = [Expect<Equal<AccountKey, "id" | "email" | "active">>];
export type TestCases = Cases;
