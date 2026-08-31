import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepTypeLabels } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepTypeLabels<{name:string;age:number;flags:[true,null]}>,
      {name:"string";age:"number";flags:["boolean","other"]}
    >
  >,
  Expect<
    Equal<
      DeepTypeLabels<symbol>,
      "other"
    >
  >,
];

export type TestCases = Cases;
