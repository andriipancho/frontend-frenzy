import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { copyReadonly } from "./task.js";

const values = copyReadonly(["a", "b"] as const);
type Cases = [Expect<Equal<typeof values, readonly ("a" | "b")[]>>];
export type TestCases = Cases;
