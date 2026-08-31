import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FormControls } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FormControls<{ name: string; age: number; active: boolean }>,
      { name: { kind: "text"; value: string }; age: { kind: "number"; value: number }; active: { kind: "checkbox"; value: boolean } }
    >
  >,
];

export type TestCases = Cases;
