import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ShippingLabel } from "./task.js";

type Expected = {
  name: string;
  city: string;
  postalCode: string;
  country: string;
};
type Cases = [Expect<Equal<ShippingLabel, Expected>>];
export type TestCases = Cases;
