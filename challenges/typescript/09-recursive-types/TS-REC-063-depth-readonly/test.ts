import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ReadonlyToDepth } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ReadonlyToDepth<{user:{profile:{name:string}}},2>,
      {readonly user:{readonly profile:{name:string}}}
    >
  >,
  Expect<
    Equal<
      ReadonlyToDepth<{id:string},0>,
      {id:string}
    >
  >,
];

export type TestCases = Cases;
