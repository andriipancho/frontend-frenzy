import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { measureShape } from "./task.js";

type Cases = [Expect<Equal<ReturnType<typeof measureShape>, number>>];
measureShape({ radius: 3 });
measureShape({ width: 4, height: 5 });
export type TestCases = Cases;
