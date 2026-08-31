import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FreezeArrays } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FreezeArrays<{tags:string[];id:number}>,
      {tags:readonly string[];id:number}
    >
  >,
];
export type TestCases = Cases;
