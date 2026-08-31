import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SelectorTree } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SelectorTree<{user:{name:string};flags:[true,number]}>,
      {user:{name:()=>string};flags:[()=>true,()=>number]}
    >
  >,
  Expect<
    Equal<
      SelectorTree<boolean>,
      ()=>boolean
    >
  >,
];

export type TestCases = Cases;
