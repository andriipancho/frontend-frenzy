import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleSpecRecord } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleSpecRecord<readonly [readonly ["host", string], readonly ["port", number], readonly ["secure", boolean]]>,
      { host: string; port: number; secure: boolean }
    >
  >,
];

export type TestCases = Cases;
