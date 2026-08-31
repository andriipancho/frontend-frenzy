import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ChangeSet } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ChangeSet<{name:string;flags:[true,number]}>,
      {name:{before:string;after:string};flags:[{before:true;after:true},{before:number;after:number}]}
    >
  >,
  Expect<
    Equal<
      ChangeSet<boolean>,
      {before:boolean;after:boolean}
    >
  >,
];

export type TestCases = Cases;
