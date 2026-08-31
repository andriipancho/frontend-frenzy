import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NumberKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NumberKeys<{id:string;count:number;rank:1}>,
      "count"|"rank"
    >
  >,
];
export type TestCases = Cases;
