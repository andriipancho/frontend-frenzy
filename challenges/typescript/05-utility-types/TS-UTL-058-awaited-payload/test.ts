import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Payload } from "./task.js";

type Expected = { id: string; receivedAt: Date };
type Cases = [Expect<Equal<Payload, Expected>>];
export type TestCases = Cases;
