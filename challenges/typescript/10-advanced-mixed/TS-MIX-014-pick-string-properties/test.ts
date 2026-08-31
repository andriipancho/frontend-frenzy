import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickString } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickString<{id:string;count:number;name:"x"}>,
      Pick<{id:string;count:number;name:"x"},"id"|"name">
    >
  >,
];
export type TestCases = Cases;
