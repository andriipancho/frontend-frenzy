import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SchemaValidators } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SchemaValidators<{id:string;flags:[true,number]}>,
      {id:{parse:(input:unknown)=>string};flags:[{parse:(input:unknown)=>true},{parse:(input:unknown)=>number}]}
    >
  >,
  Expect<
    Equal<
      SchemaValidators<boolean>,
      {parse:(input:unknown)=>boolean}
    >
  >,
];

export type TestCases = Cases;
