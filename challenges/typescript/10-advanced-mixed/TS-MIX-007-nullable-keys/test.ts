import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NullableKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NullableKeys<{id:string;name:string|null;note:null}>,
      "name"|"note"
    >
  >,
];
export type TestCases = Cases;
