import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { scores } from "./task.js";

type Cases = [Expect<Equal<typeof scores, number[]>>];
scores.push(100);
// @ts-expect-error scores cannot contain text
scores.push("100");
export type TestCases = Cases;
