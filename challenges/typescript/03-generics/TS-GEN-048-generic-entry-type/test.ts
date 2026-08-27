import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Entry } from "./task.js";

type Cases = [Expect<Equal<Entry<"ready", boolean>, ["ready", boolean]>>];
export type TestCases = Cases;
