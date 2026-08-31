import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Serialized } from "./task.js";

type Cases = [
  Expect<
    Equal<
      Serialized<{id:string;createdAt:Date;nested:{values:[number,Date]};run:()=>void}>,
      {id:string;createdAt:string;nested:{values:[number,string]};run:never}
    >
  >,
  Expect<
    Equal<
      Serialized<Date>,
      string
    >
  >,
];

export type TestCases = Cases;
