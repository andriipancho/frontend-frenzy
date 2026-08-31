import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ElementProperties } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ElementProperties<{tags:string[];id:number;pair:readonly [1,2]}>,
      {tags:string;id:number;pair:1|2}
    >
  >,
];
export type TestCases = Cases;
