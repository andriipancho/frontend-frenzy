import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { formatEntry } from "./task.js";

type Cases = [Expect<Equal<Parameters<typeof formatEntry>, [entry: readonly [string, number]]>>];
formatEntry(["retries", 3]);
formatEntry(["retries", 3] as const);
export type TestCases = Cases;
