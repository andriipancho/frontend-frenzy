import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Cache } from "./task.js";

type Expected = { get(key: string): number | undefined; set(key: string, value: number): void };
type Cases = [Expect<Equal<Cache<number>, Expected>>];
export type TestCases = Cases;
