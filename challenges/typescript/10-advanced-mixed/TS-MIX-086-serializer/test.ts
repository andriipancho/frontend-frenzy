import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedSerializer } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedSerializer<{id:string}>,
      (value:{id:string})=>string
    >
  >,
];
export type TestCases = Cases;
