import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DataAttributes } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DataAttributes<{id:string;active:boolean}>,
      {"data-id":string;"data-active":boolean}
    >
  >,
];
export type TestCases = Cases;
