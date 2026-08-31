import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseQuery } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseQuery<"page=2">,
      {key:"page";value:"2"}
    >
  >,
];
export type TestCases = Cases;
