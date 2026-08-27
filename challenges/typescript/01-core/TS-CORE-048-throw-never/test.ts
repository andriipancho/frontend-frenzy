import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { fail } from "./task.js";

type Cases = [Expect<Equal<ReturnType<typeof fail>, never>>];
export type TestCases = Cases;
