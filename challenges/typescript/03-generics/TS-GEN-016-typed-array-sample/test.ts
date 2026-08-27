import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { sample } from "./task.js";

const result = sample([{ id: "a" }, { id: "b" }]);
type Cases = [Expect<Equal<typeof result, { id: string } | undefined>>];
export type TestCases = Cases;
