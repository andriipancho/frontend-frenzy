import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PromisedProperties } from "./task.js";

type Expected = { user: Promise<{ id: string }>; count: Promise<number> };
type Cases = [Expect<Equal<PromisedProperties<{ user: { id: string }; count: number }>, Expected>>];
export type TestCases = Cases;
