import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { preserveTuple } from "./task.js";

const tuple = preserveTuple(["GET", "/users"] as const);
type Cases = [Expect<Equal<typeof tuple, readonly ["GET", "/users"]>>];
export type TestCases = Cases;
