import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";import type { Setters } from "./task.js";
type Expected={setName:(value:string)=>void;setCount:(value:number)=>void};type Cases=[Expect<Equal<Setters<{name:string;count:number}>,Expected>>];export type TestCases=Cases;
