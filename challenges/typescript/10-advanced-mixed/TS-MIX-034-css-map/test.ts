import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CssVariables } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CssVariables<{color:string;spacing:number}>,
      {"--color":string;"--spacing":number}
    >
  >,
];
export type TestCases = Cases;
