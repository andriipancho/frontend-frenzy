import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnionPayload } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UnionPayload<{type:"a";payload:string}|{type:"b";payload:number}>,
      string|number
    >
  >,
];
export type TestCases = Cases;
