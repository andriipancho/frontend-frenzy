import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Store } from "./task.js";

type Expected = {
  get: () => number;
  set: (next: number) => void;
  reset: () => void;
};
type Cases = [Expect<Equal<Store, Expected>>];
export type TestCases = Cases;
