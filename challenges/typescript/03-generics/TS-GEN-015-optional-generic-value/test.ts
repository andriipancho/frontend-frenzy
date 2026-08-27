import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { optionalValue } from "./task.js";

const result = optionalValue("ready" as const, true);
type Cases = [Expect<Equal<typeof result, "ready" | undefined>>];
export type TestCases = Cases;
