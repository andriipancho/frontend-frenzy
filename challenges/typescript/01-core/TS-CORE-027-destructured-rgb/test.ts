import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { toCss } from "./task.js";

type Cases = [Expect<Equal<Parameters<typeof toCss>, [rgb: [number, number, number]]>>];
toCss([255, 128, 0]);
// @ts-expect-error all three channels are required
toCss([255, 128]);
export type TestCases = Cases;
