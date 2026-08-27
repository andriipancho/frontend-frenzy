import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { wrap } from "./task.js";

const wrapped = wrap("ready" as const);
type Cases = [Expect<Equal<typeof wrapped, "ready"[]>>];
export type TestCases = Cases;
