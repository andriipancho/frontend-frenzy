import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedPathValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedPathValue<{app:{port:number}},"app.port">,
      number
    >
  >,
];
export type TestCases = Cases;
