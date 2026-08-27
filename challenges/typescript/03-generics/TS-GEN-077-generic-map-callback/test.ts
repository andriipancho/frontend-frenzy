import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { mapValues } from "./task.js";

const lengths = mapValues(["a", "ready"], (value: string) => value.length);
type Cases = [Expect<Equal<typeof lengths, number[]>>];
export type TestCases = Cases;
