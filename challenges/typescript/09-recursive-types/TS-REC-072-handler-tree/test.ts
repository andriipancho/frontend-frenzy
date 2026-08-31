import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { HandlerTree } from "./task.js";

type Cases = [
  Expect<
    Equal<
      HandlerTree<{user:{saved:{id:string}};ready:boolean}>,
      {user:{saved:{id:(payload:string)=>void}};ready:(payload:boolean)=>void}
    >
  >,
  Expect<
    Equal<
      HandlerTree<string>,
      (payload:string)=>void
    >
  >,
];

export type TestCases = Cases;
