import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ProductCard } from "./task.js";

type Expected = {
  readonly sku: string;
  readonly name: string;
  readonly price: number;
  readonly imageUrl: string;
};
type Cases = [Expect<Equal<ProductCard, Expected>>];
export type TestCases = Cases;
