import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyBoxes } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PropertyBoxes<{id:string;count:number}>,
      {id:{value:string;key:"id"};count:{value:number;key:"count"}}
    >
  >,
];
export type TestCases = Cases;
