import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { containLegacy } from "./task.js";

type Cases = [Expect<Equal<ReturnType<typeof containLegacy>, unknown>>];
const result = containLegacy({ id: "legacy" });
// @ts-expect-error callers must narrow the contained result
result.id;
export type TestCases = Cases;
