import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AuthenticatedClient } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AuthenticatedClient<{request:{id:string};response:{name:string};auth:true}>,
      (token:string,request:{id:string})=>Promise<{name:string}>
    >
  >,
];
export type TestCases = Cases;
