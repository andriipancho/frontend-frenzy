import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { origin } from "./task.js";

type Cases = [Expect<Equal<typeof origin, readonly [0, 0]>>];
// @ts-expect-error tuple must be readonly
origin[0] = 1;
export type TestCases = Cases;
