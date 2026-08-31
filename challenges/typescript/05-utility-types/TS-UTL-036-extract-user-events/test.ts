import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UserEvent } from "./task.js";

type Expected = "user:created" | "user:deleted";
type Cases = [Expect<Equal<UserEvent, Expected>>];
export type TestCases = Cases;
