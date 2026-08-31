import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseHeader } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseHeader<"Content-Type: json">,
      {name:"content-type";value:"json"}
    >
  >,
];
export type TestCases = Cases;
