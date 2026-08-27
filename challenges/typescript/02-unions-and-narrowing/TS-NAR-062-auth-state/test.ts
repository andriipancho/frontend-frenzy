import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AuthState } from "./task.js";

type Expected =
  | { status: "anonymous" }
  | { status: "authenticating" }
  | { status: "authenticated"; user: { id: string } }
  | { status: "rejected"; error: string };
type Cases = [Expect<Equal<AuthState, Expected>>];
// @ts-expect-error authenticated state requires a user
const invalid: AuthState = { status: "authenticated" };
void invalid;
export type TestCases = Cases;
