import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EnvironmentKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EnvironmentKeys<{port:number;host:string}>,
      {PORT:number;HOST:string}
    >
  >,
];
export type TestCases = Cases;
