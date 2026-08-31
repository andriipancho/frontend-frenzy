import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UserId } from "./task.js";

type Cases = [Expect<Equal<UserId, string>>];
export type TestCases = Cases;
