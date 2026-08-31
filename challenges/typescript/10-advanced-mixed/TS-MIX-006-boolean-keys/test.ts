import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { BooleanKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      BooleanKeys<{active:boolean;id:string;ready:true}>,
      "active"|"ready"
    >
  >,
];
export type TestCases = Cases;
