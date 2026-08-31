import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedFeatures } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedFeatures<{search:true;billing:false;beta:boolean}>,
      "search"
    >
  >,
];
export type TestCases = Cases;
