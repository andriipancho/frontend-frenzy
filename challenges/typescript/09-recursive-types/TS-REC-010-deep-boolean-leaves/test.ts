import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepBooleans } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepBooleans<{user:{name:string};tags:[string,number]}>,
      {user:{name:boolean};tags:[boolean,boolean]}
    >
  >,
  Expect<
    Equal<
      DeepBooleans<() => void>,
      boolean
    >
  >,
];

export type TestCases = Cases;
