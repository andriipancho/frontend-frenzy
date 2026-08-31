import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StringKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StringKeys<{id:string;count:number;name:"x"}>,
      "id"|"name"
    >
  >,
];
export type TestCases = Cases;
