import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ActionCreators, Action } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ActionCreators<Action>,
      { add: (payload: { text: string }) => { type: "add"; text: string }; remove: (payload: { id: string }) => { type: "remove"; id: string }; clear: () => { type: "clear" } }
    >
  >,
];

export type TestCases = Cases;
