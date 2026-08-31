import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EditableAccountKey } from "./task.js";

type Expected = "email" | "displayName" | "active";
type Cases = [Expect<Equal<EditableAccountKey, Expected>>];
export type TestCases = Cases;
