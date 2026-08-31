import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnionTags } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UnionTags<{type:"a"}|{type:"b"}|{kind:"x"}>,
      "a"|"b"
    >
  >,
];
export type TestCases = Cases;
