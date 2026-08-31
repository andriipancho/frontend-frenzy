import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TaggedProperties } from "./task.js";

type Expected = { id: { key: "id"; value: string }; count: { key: "count"; value: number } };
type Cases = [Expect<Equal<TaggedProperties<{ id: string; count: number }>, Expected>>];
export type TestCases = Cases;
