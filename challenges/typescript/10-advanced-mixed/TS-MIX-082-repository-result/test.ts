import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RepositoryResult } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RepositoryResult<{id:string},true>,
      {found:true;value:{id:string}}|{found:false;reason:"missing"}
    >
  >,
];
export type TestCases = Cases;
