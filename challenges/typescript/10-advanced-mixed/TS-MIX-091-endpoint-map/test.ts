import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedEndpoints } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedEndpoints<{user:{request:{id:string};response:{name:string}}}>,
      {user:(request:{id:string})=>Promise<{name:string}>}
    >
  >,
];
export type TestCases = Cases;
