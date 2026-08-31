import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SaveOperation } from "./task.js";

type Cases = [
  Expect<Equal<SaveOperation, Promise<{ id: string; saved: true }>>>,
];
export type TestCases = Cases;
