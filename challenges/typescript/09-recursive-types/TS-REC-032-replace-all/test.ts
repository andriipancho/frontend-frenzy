import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ReplaceAll } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ReplaceAll<"a-b-c","-","_">,
      "a_b_c"
    >
  >,
  Expect<
    Equal<
      ReplaceAll<"foo foo","foo","bar">,
      "bar bar"
    >
  >,
  Expect<
    Equal<
      ReplaceAll<"value","x","y">,
      "value"
    >
  >,
];

export type TestCases = Cases;
