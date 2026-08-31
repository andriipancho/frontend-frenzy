import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AsyncFlags } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AsyncFlags<{ user: Promise<string>; count: number; ready: PromiseLike<boolean> }>,
      { user: true; count: false; ready: true }
    >
  >,
  Expect<
    Equal<
      AsyncFlags<{}>,
      {}
    >
  >,
];

export type TestCases = Cases;
