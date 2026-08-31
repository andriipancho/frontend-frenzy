import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResponseData } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResponseData<{data:{data:{id:string}}}>,
      {id:string}
    >
  >,
  Expect<
    Equal<
      ResponseData<[{data:string},{data:number}]>,
      [string,number]
    >
  >,
  Expect<
    Equal<
      ResponseData<boolean>,
      boolean
    >
  >,
];

export type TestCases = Cases;
