import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResolvedProperties } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResolvedProperties<{ user: Promise<string>; count: number; ready: PromiseLike<true> }>,
      { user: string; count: number; ready: true }
    >
  >,
  Expect<
    Equal<
      ResolvedProperties<{}>,
      {}
    >
  >,
];

export type TestCases = Cases;
