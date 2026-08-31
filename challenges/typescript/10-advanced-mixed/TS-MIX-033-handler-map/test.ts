import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedHandlers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedHandlers<{saved:{id:string};closed:undefined}>,
      {onSaved:(payload:{id:string})=>void;onClosed:(payload:undefined)=>void}
    >
  >,
];
export type TestCases = Cases;
