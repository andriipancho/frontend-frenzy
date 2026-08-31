import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LocaleCatalog } from "./task.js";

type Expected = {
  readonly en: string;
  readonly pl: string;
  readonly uk: string;
};
type Cases = [Expect<Equal<LocaleCatalog, Expected>>];
export type TestCases = Cases;
