import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedGuard } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedGuard<{auth:true;roles:readonly ["admin","editor"]}>,
      {kind:"roles";role:"admin"|"editor"}
    >
  >,
];
export type TestCases = Cases;
