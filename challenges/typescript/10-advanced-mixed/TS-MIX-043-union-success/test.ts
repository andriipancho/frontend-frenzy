import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SuccessMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SuccessMembers<{ok:true;data:string}|{ok:false;error:Error}>,
      {ok:true;data:string}
    >
  >,
];
export type TestCases = Cases;
