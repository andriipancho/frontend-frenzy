import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SessionView } from "./task.js";

type Expected = { id: string; userId: string; expiresAt: Date };
type Cases = [Expect<Equal<SessionView, Expected>>];
export type TestCases = Cases;
