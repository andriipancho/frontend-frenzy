import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Prefixed } from "./task.js";
type Cases=[Expect<Equal<Prefixed<{name:string;age:number},"user">,{userName:string;userAge:number}>>];
export type TestCases=Cases;
