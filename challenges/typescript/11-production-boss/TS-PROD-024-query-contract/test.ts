import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { QueryContract } from "./task.js";

type Cases = [
  Expect<
    Equal<
      QueryContract<"query:string,page:number,exact:boolean">,
      { query: string; page: number; exact: boolean }
    >
  >,
];

export type TestCases = Cases;
