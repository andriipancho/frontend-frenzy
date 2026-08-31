import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LeafPaths } from "./task.js";

type Cases = [
  Expect<
    Equal<
      LeafPaths<{user:{name:string;address:{city:string}};active:boolean}>,
      "user.name"|"user.address.city"|"active"
    >
  >,
  Expect<
    Equal<
      LeafPaths<{id:string}>,
      "id"
    >
  >,
];

export type TestCases = Cases;
