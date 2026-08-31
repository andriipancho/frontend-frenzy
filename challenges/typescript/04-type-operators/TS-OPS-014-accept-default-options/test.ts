import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { normalizeOptions } from "./task.js";

const options = normalizeOptions({ retries: 4, cache: false });
type Expected = { retries: number; cache: boolean };
type Cases = [Expect<Equal<typeof options, Expected>>];
// @ts-expect-error cache is required
normalizeOptions({ retries: 4 });
export type TestCases = Cases;
