import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ProfilePatch } from "./task.js";

type Expected = { name?: string; email?: string; bio?: string };
type Cases = [Expect<Equal<ProfilePatch, Expected>>];
export type TestCases = Cases;
