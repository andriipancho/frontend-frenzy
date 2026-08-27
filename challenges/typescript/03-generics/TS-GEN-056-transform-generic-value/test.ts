import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { transformValue } from "./task.js";

const length = transformValue("ready", (value) => value.length);
type Cases = [Expect<Equal<typeof length, number>>];
export type TestCases = Cases;
