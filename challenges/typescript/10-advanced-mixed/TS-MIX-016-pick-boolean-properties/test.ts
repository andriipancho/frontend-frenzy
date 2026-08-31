import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickBoolean } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickBoolean<{active:boolean;id:string;ready:true}>,
      Pick<{active:boolean;id:string;ready:true},"active"|"ready">
    >
  >,
];
export type TestCases = Cases;
