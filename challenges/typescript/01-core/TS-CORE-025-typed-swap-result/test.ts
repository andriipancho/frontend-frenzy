import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { swapEntry } from "./task.js";

type Cases = [Expect<Equal<ReturnType<typeof swapEntry>, [string, number]>>];
const [label, rank] = swapEntry([1, "primary"]);
label.toUpperCase();
rank.toFixed();
export type TestCases = Cases;
