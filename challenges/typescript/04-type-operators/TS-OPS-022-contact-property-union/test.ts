import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ContactValue } from "./task.js";

type Cases = [Expect<Equal<ContactValue, string | null>>];
export type TestCases = Cases;
