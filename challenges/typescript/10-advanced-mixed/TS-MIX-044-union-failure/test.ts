import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FailureMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FailureMembers<{ok:true;data:string}|{ok:false;error:Error}>,
      {ok:false;error:Error}
    >
  >,
];
export type TestCases = Cases;
