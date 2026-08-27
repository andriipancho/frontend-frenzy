import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Pair } from "./task.js";

type Cases = [Expect<Equal<Pair<number>, [number, number]>>];
export type TestCases = Cases;
