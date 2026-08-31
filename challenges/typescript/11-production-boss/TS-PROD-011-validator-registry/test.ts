import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ValidatorRegistry, FormValues } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ValidatorRegistry<FormValues>,
      { email: (value: string, values: FormValues) => string | undefined; age: (value: number, values: FormValues) => string | undefined; consent: (value: boolean, values: FormValues) => string | undefined }
    >
  >,
];

export type TestCases = Cases;
