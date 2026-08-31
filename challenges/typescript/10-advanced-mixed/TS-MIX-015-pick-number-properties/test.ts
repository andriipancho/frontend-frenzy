import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickNumber } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickNumber<{id:string;count:number;rank:1}>,
      Pick<{id:string;count:number;rank:1},"count"|"rank">
    >
  >,
];
export type TestCases = Cases;
