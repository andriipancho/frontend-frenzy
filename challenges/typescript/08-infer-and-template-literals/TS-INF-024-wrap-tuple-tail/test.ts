import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { WrappedTail } from "./task.js";

type Cases = [
  Expect<
    Equal<
      WrappedTail<[string, number, boolean]>,
      { rest: [number, boolean]; count: 2 }
    >
  >,
  Expect<
    Equal<
      WrappedTail<readonly [1]>,
      { rest: []; count: 0 }
    >
  >,
  Expect<
    Equal<
      WrappedTail<[]>,
      { rest: []; count: 0 }
    >
  >,
];

export type TestCases = Cases;
