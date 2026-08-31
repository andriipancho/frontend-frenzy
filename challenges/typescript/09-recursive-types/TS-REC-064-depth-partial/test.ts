import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PartialToDepth } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PartialToDepth<{user:{profile:{name:string}}},2>,
      {user?:{profile?:{name:string}}}
    >
  >,
  Expect<
    Equal<
      PartialToDepth<{id:string},0>,
      {id:string}
    >
  >,
];

export type TestCases = Cases;
