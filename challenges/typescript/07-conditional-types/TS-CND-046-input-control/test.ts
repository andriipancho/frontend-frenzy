import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { InputControl } from "./task.js";

type Cases = [
  Expect<
    Equal<
      InputControl<string>,
      "text"
    >
  >,
  Expect<
    Equal<
      InputControl<number | boolean>,
      "number" | "checkbox"
    >
  >,
  Expect<
    Equal<
      InputControl<Date>,
      "date"
    >
  >,
];

export type TestCases = Cases;
