import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Region, RegionEndpoints } from "./task.js";

type Cases = [
  Expect<Equal<Region, "eu" | "us" | "apac">>,
  Expect<Equal<
    keyof RegionEndpoints,
    "eu" | "us" | "apac"
  >>,
  Expect<Equal<RegionEndpoints["eu"], `https://${string}`>>,
];
export type TestCases = Cases;
