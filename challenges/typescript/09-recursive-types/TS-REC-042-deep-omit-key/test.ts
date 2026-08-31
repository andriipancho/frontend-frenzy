import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepOmitKey } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepOmitKey<{id:string;child:{id:number;name:string}},"id">,
      {child:{name:string}}
    >
  >,
  Expect<
    Equal<
      DeepOmitKey<{meta:{secret:string};secret:boolean},"secret">,
      {meta:{}}
    >
  >,
];

export type TestCases = Cases;
