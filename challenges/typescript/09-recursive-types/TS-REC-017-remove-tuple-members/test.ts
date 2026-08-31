import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RemoveMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RemoveMembers<[1,2,1,3],1>,
      [2,3]
    >
  >,
  Expect<
    Equal<
      RemoveMembers<["a",1,"b"],string>,
      [1]
    >
  >,
  Expect<
    Equal<
      RemoveMembers<[],number>,
      []
    >
  >,
];

export type TestCases = Cases;
