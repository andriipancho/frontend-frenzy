import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { firstItem } from "./task.js";

type Cases = [Expect<Equal<ReturnType<typeof firstItem>, string | undefined>>];
const missing: string | undefined = firstItem([]);
void missing;
export type TestCases = Cases;
