import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StringMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StringMembers<["a",1,"b",false]>,
      ["a","b"]
    >
  >,
  Expect<
    Equal<
      StringMembers<[1,2]>,
      []
    >
  >,
  Expect<
    Equal<
      StringMembers<[]>,
      []
    >
  >,
];

export type TestCases = Cases;
