import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ValidatorMap } from "./task.js";

type Expected = {
  email: (value: string) => boolean;
  positive: (value: number) => boolean;
};
type Cases = [Expect<Equal<ValidatorMap, Expected>>];
export type TestCases = Cases;
