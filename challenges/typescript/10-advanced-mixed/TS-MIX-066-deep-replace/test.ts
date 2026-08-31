import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepStringToBoolean } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepStringToBoolean<{id:string;meta:{name:string;count:number}}>,
      {id:boolean;meta:{name:boolean;count:number}}
    >
  >,
];
export type TestCases = Cases;
