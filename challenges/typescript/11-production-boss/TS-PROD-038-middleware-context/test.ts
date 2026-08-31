import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MiddlewareContext } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MiddlewareContext<readonly [(context: {}) => { userId: string }, (context: {}) => { requestId: string }, (context: {}) => { admin: boolean }]>,
      { userId: string } & { requestId: string } & { admin: boolean }
    >
  >,
];

export type TestCases = Cases;
