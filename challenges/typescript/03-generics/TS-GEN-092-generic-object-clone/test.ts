import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { cloneObject } from "./task.js";

const clone = cloneObject({ id: "item-1", quantity: 2 });
type Cases = [
  Expect<Equal<typeof clone, { id: string; quantity: number }>>,
];
export type TestCases = Cases;
