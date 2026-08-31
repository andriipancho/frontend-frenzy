import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Getters } from "./task.js";
type Expected={getName:()=>string;getActive:()=>boolean};
type Cases=[Expect<Equal<Getters<{name:string;active:boolean}>,Expected>>];export type TestCases=Cases;
