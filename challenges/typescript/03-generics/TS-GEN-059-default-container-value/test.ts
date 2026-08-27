import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ContainerValue } from "./task.js";

type Cases = [
  Expect<Equal<ContainerValue["value"], string>>,
  Expect<Equal<ContainerValue<42>["value"], 42>>,
];
export type TestCases = Cases;
