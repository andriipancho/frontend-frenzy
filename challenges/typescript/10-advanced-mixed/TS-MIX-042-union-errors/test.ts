import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnionError } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UnionError<{ok:true;data:string}|{ok:false;error:"bad"}>,
      "bad"
    >
  >,
];
export type TestCases = Cases;
