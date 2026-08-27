import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ApiPage } from "./task.js";

type DefaultPage = ApiPage;
type ProductPage = ApiPage<{ sku: string }>;
type Cases = [
  Expect<Equal<DefaultPage["items"], unknown[]>>,
  Expect<Equal<ProductPage["items"], { sku: string }[]>>,
];
export type TestCases = Cases;
