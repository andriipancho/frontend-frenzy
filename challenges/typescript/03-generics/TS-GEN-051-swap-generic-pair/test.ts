import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { swapPair } from "./task.js";

const pair = swapPair(["ready" as const, 1 as const]);
type Cases = [Expect<Equal<typeof pair, [1, "ready"]>>];
export type TestCases = Cases;
