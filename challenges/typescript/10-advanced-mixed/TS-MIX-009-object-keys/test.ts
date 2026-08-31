import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ObjectKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ObjectKeys<{profile:{id:string};name:string;run:()=>void}>,
      "profile"|"run"
    >
  >,
];
export type TestCases = Cases;
