import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { sanitizeSession } from "./task.js";

const safe = sanitizeSession({
  id: "s1",
  userId: "u1",
  token: "secret",
  expiresAt: new Date(),
});
type Expected = { id: string; userId: string; expiresAt: Date };
type Cases = [Expect<Equal<typeof safe, Expected>>];
export type TestCases = Cases;
