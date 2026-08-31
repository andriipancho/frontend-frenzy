import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TestIdentifiers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TestIdentifiers<{button:unknown;dialog:unknown}>,
      {testButton:"button";testDialog:"dialog"}
    >
  >,
];
export type TestCases = Cases;
