import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UserProfile } from "./task.js";

type Expected = { id: string; name: string; active: boolean };
type Cases = [Expect<Equal<UserProfile, Expected>>];
const profile: UserProfile = { id: "u1", name: "Ada", active: true };
void profile;
export type TestCases = Cases;
