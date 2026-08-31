import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SetterMap } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SetterMap<{name:string;age:number}>,
      {setName:(value:string)=>void;setAge:(value:number)=>void}
    >
  >,
];
export type TestCases = Cases;
