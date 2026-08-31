import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickAsync } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickAsync<{load:()=>Promise<string>;save:()=>void}>,
      Pick<{load:()=>Promise<string>;save:()=>void},"load">
    >
  >,
];
export type TestCases = Cases;
