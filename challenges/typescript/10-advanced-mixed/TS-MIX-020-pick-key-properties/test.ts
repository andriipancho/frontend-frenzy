import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickPropertyKey } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickPropertyKey<{id:string;rank:number;active:boolean;meta:object}>,
      Pick<{id:string;rank:number;active:boolean;meta:object},"id"|"rank">
    >
  >,
];
export type TestCases = Cases;
