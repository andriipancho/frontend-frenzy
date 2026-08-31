import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedParameters } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedParameters<(id:string,force:boolean)=>void>,
      [id:string,force:boolean]
    >
  >,
];
export type TestCases = Cases;
