import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StatusLabels } from "./task.js";

type Expected = { pending: string; paid: string; shipped: string };
type Cases = [Expect<Equal<StatusLabels, Expected>>];
export type TestCases = Cases;
