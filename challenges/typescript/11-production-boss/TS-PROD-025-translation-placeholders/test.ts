import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TranslationValues } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TranslationValues<"Hello {{name}}, you have {{count}} messages">,
      { name: string | number; count: string | number }
    >
  >,
];

export type TestCases = Cases;
