import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StateNames } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StateNames<{user:string;count:number}>,
      {userState:{value:string;updated:boolean};countState:{value:number;updated:boolean}}
    >
  >,
];
export type TestCases = Cases;
