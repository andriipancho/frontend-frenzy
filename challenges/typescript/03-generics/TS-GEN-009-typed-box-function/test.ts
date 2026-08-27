import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { makeBox } from "./task.js";

const box = makeBox({ ready: true });
type Cases = [Expect<Equal<typeof box, { value: { ready: boolean } }>>];
export type TestCases = Cases;
