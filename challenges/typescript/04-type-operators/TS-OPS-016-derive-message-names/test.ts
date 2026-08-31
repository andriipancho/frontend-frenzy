import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MessageName } from "./task.js";

type Cases = [Expect<Equal<MessageName, "saved" | "deleted" | "offline">>];
export type TestCases = Cases;
