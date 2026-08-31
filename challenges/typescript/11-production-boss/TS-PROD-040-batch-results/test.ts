import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { BatchResults } from "./task.js";

type Cases = [
  Expect<
    Equal<
      BatchResults<readonly [{ id: "a"; value: number }, { id: "b"; value: string }, boolean]>,
      readonly [{ input: { id: "a"; value: number }; result: { id: "a"; accepted: boolean } }, { input: { id: "b"; value: string }; result: { id: "b"; accepted: boolean } }, { input: boolean; result: { accepted: boolean } }]
    >
  >,
];

export type TestCases = Cases;
