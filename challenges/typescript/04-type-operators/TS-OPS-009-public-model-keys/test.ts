import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SessionMember } from "./task.js";

type Cases = [Expect<Equal<SessionMember, "id" | "expiresAt" | "refresh">>];
export type TestCases = Cases;
