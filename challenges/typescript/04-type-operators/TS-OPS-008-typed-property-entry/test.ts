import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { propertyEntry } from "./task.js";

const entry = propertyEntry({ id: "u1", score: 9 }, "score");
type Cases = [Expect<Equal<typeof entry, readonly ["score", number]>>];
// @ts-expect-error missing is not a key
propertyEntry({ id: "u1" }, "missing");
export type TestCases = Cases;
