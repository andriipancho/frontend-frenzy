import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedEventRegistry } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedEventRegistry<{saved:{id:string};closed:undefined}>,
      {onSaved:(payload:{id:string})=>Promise<void>;onClosed:(payload:undefined)=>Promise<void>}
    >
  >,
];
export type TestCases = Cases;
