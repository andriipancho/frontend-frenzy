import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickFunction } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickFunction<{save:()=>void;id:string}>,
      Pick<{save:()=>void;id:string},"save">
    >
  >,
];
export type TestCases = Cases;
