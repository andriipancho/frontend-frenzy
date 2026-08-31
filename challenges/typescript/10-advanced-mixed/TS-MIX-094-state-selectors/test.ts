import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedSelectors } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedSelectors<{user:{id:string};count:number}>,
      {selectUser:()=>{id:string};selectCount:()=>number}
    >
  >,
];
export type TestCases = Cases;
