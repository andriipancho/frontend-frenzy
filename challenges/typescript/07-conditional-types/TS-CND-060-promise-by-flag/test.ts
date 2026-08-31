import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PromiseIf } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PromiseIf<string, true>,
      Promise<string>
    >
  >,
  Expect<
    Equal<
      PromiseIf<number, false>,
      number
    >
  >,
  Expect<
    Equal<
      PromiseIf<boolean, boolean>,
      boolean | Promise<boolean>
    >
  >,
];

export type TestCases = Cases;
