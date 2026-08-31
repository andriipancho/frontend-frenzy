import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StateSnapshot } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StateSnapshot<{user:Promise<{name:string}>;flags:[true,number];refresh:()=>void}>,
      {readonly user:{readonly name:string};readonly flags:readonly [true,number];readonly refresh:never}
    >
  >,
  Expect<
    Equal<
      StateSnapshot<Promise<string>>,
      string
    >
  >,
];

export type TestCases = Cases;
