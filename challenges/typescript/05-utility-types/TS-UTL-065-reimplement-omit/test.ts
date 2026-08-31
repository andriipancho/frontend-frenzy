import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyOmit } from "./task.js";

type Source = { id: string; secret: string; active: boolean };
type Expected = { id: string; active: boolean };
type Cases = [
  Expect<Equal<MyOmit<Source, "secret" | "missing">, Expected>>,
];
export type TestCases = Cases;
