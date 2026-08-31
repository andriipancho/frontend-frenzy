import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyKeyKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PropertyKeyKeys<{id:string;rank:number;active:boolean;meta:object}>,
      "id"|"rank"
    >
  >,
];
export type TestCases = Cases;
