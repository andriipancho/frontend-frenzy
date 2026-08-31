import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FetchedUser } from "./task.js";

type Expected = { id: string; name: string } | null;
type Cases = [Expect<Equal<FetchedUser, Expected>>];
export type TestCases = Cases;
