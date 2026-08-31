import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IncludeTree } from "./task.js";

type Cases = [
  Expect<
    Equal<
      IncludeTree<{profile:{address:{city:string}};active:boolean}>,
      {profile?:boolean|{address?:boolean|{city?:boolean}};active?:boolean}
    >
  >,
  Expect<
    Equal<
      IncludeTree<string>,
      boolean
    >
  >,
];

export type TestCases = Cases;
