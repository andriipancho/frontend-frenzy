import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import type { CachedName } from "./task.js";

type Cases = [Expect<Equal<CachedName, string | null>>];

const hit: CachedName = "Ada";
const miss: CachedName = null;
void hit;
void miss;

export type TestCases = Cases;
