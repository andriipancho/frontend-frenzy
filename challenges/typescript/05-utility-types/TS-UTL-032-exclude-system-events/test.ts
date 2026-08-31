import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ApplicationEvent } from "./task.js";

type Expected = "user:created" | "user:deleted";
type Cases = [Expect<Equal<ApplicationEvent, Expected>>];
export type TestCases = Cases;
