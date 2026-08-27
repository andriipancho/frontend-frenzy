import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { resolveValue } from "./task.js";

const result = resolveValue("ready" as const);
type Cases = [Expect<Equal<typeof result, Promise<"ready">>>];
export type TestCases = Cases;
