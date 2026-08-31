import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CatalogItem } from "./task.js";

type Expected = { sku: string; price: number };
type Cases = [Expect<Equal<CatalogItem, Expected>>];
export type TestCases = Cases;
