import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NestedKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NestedKeys<{user:{name:string;address:{city:string}};active:boolean}>,
      "user"|"name"|"address"|"city"|"active"
    >
  >,
  Expect<
    Equal<
      NestedKeys<string>,
      never
    >
  >,
];

export type TestCases = Cases;
