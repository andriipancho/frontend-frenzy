import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedCache } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedCache<string,true>,
      {hit:true;value:string}
    >
  >,
];
export type TestCases = Cases;
