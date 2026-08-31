import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { Cache } from "./task.js";
import type { CacheInstance } from "./task.js";

type Cases = [Expect<Equal<CacheInstance, Cache>>];
export type TestCases = Cases;
