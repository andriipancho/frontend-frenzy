import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CommandName } from "./task.js";

type Cases = [Expect<Equal<CommandName, "deploy" | "status" | "rollback">>];
export type TestCases = Cases;
