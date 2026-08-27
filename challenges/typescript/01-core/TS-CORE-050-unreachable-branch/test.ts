import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { unreachable } from "./task.js";

type Cases = [
  Expect<Equal<Parameters<typeof unreachable>, [value: never]>>,
];
const signature: (value: never) => never = unreachable;
// @ts-expect-error reachable values cannot enter an unreachable branch
unreachable("reachable");
void signature;
export type TestCases = Cases;
