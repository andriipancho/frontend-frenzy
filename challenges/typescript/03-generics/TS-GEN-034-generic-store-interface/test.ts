import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Store } from "./task.js";

type State = { count: number };
type Expected = { getState(): State; setState(state: State): void };
type Cases = [Expect<Equal<Store<State>, Expected>>];
export type TestCases = Cases;
