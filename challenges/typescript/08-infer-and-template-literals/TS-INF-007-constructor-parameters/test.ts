import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ConstructorParametersOf } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ConstructorParametersOf<{ new (id: string, active?: boolean): object }>,
      [id: string, active?: boolean]
    >
  >,
  Expect<
    Equal<
      ConstructorParametersOf<typeof Date>,
      [value: string | number | Date]
    >
  >,
  Expect<
    Equal<
      ConstructorParametersOf<string>,
      never
    >
  >,
];

export type TestCases = Cases;
