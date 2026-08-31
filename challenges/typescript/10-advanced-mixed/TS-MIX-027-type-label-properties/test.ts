import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyLabels } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PropertyLabels<{id:string;count:number;active:boolean}>,
      {id:"string";count:"number";active:"other"}
    >
  >,
];
export type TestCases = Cases;
