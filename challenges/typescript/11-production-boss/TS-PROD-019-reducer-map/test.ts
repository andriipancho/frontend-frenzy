import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ReducerMap, CounterAction } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ReducerMap<{ value: number }, CounterAction>,
      { increment: (state: { value: number }, action: { type: "increment"; amount: number }) => { value: number }; reset: (state: { value: number }, action: { type: "reset" }) => { value: number }; restore: (state: { value: number }, action: { type: "restore"; snapshot: { value: number } }) => { value: number } }
    >
  >,
];

export type TestCases = Cases;
