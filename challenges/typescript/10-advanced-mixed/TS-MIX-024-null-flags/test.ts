import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NullFlags } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NullFlags<{id:string;name:string|null}>,
      {id:false;name:true}
    >
  >,
];
export type TestCases = Cases;
