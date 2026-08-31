import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IdentifiedMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      IdentifiedMembers<{id:string;name:string}|{name:string}|{id:number}>,
      {id:string;name:string}|{id:number}
    >
  >,
];
export type TestCases = Cases;
