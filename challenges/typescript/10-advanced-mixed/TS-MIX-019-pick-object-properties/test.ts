import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickObject } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickObject<{profile:{id:string};name:string;run:()=>void}>,
      Pick<{profile:{id:string};name:string;run:()=>void},"profile"|"run">
    >
  >,
];
export type TestCases = Cases;
