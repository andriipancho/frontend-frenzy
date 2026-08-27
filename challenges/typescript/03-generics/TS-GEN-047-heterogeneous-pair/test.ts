import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { makePair } from "./task.js";

const pair = makePair("id" as const, 42 as const);
type Cases = [Expect<Equal<typeof pair, ["id", 42]>>];
export type TestCases = Cases;
