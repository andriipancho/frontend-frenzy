import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedRetry } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedRetry<string,"timeout",3>,
      {ok:true;value:string;attempts:3}|{ok:false;error:"timeout"}
    >
  >,
];
export type TestCases = Cases;
