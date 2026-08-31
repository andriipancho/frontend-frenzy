import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MessageText } from "./task.js";

type Expected = "Changes saved" | "Item deleted" | "Connection lost";
type Cases = [Expect<Equal<MessageText, Expected>>];
export type TestCases = Cases;
