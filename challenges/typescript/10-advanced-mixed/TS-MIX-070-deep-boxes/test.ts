import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepMixedBoxes } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepMixedBoxes<{id:string;meta:{count:number}}>,
      {id:{value:string};meta:{count:{value:number}}}
    >
  >,
];
export type TestCases = Cases;
