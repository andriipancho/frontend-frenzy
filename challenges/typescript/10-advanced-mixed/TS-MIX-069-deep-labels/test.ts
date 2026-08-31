import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepMixedLabels } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepMixedLabels<{id:string;meta:{count:number;active:boolean}}>,
      {id:"string";meta:{count:"number";active:"other"}}
    >
  >,
];
export type TestCases = Cases;
