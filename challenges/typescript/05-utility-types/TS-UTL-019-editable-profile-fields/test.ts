import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ProfileUpdate } from "./task.js";

type Expected = {
  displayName?: string;
  bio?: string;
  avatarUrl?: string | null;
};
type Cases = [Expect<Equal<ProfileUpdate, Expected>>];
export type TestCases = Cases;
