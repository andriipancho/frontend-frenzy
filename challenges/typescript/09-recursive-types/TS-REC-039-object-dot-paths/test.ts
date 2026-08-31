import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ObjectPaths } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ObjectPaths<{user:{name:string;address:{city:string}};active:boolean}>,
      "user"|"user.name"|"user.address"|"user.address.city"|"active"
    >
  >,
  Expect<
    Equal<
      ObjectPaths<{id:string}>,
      "id"
    >
  >,
];

export type TestCases = Cases;
