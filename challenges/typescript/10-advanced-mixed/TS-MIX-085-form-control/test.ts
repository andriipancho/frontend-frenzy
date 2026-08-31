import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedControl } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedControl<number>,
      {kind:"number";value:number}
    >
  >,
];
export type TestCases = Cases;
