import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseVersion } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseVersion<"/v2/users">,
      {version:2;resource:"users"}
    >
  >,
];
export type TestCases = Cases;
