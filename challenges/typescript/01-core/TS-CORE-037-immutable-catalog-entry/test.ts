import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CatalogEntry } from "./task.js";

type Expected = {
  readonly sku: string;
  readonly position: readonly [number, number];
  description?: string;
  readonly tags: readonly string[];
};
type Cases = [Expect<Equal<CatalogEntry, Expected>>];
const entry: CatalogEntry = { sku: "sku-1", position: [2, 4], tags: ["featured"] };
// @ts-expect-error sku is immutable
entry.sku = "sku-2";
// @ts-expect-error tags are immutable
entry.tags.push("sale");
export type TestCases = Cases;
