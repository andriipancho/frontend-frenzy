import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SavedRecord } from "./task.js";

type Cases = [
  Expect<Equal<SavedRecord, { id: string; saved: boolean }>>,
];
export type TestCases = Cases;
