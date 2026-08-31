import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PublicUser } from "./task.js";

type Expected = { id: string; name: string; avatarUrl: string | null };
type Cases = [Expect<Equal<PublicUser, Expected>>];
export type TestCases = Cases;
