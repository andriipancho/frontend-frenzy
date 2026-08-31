import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CallableMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CallableMembers<string|(()=>void)|((id:string)=>number)>,
      (()=>void)|((id:string)=>number)
    >
  >,
];
export type TestCases = Cases;
