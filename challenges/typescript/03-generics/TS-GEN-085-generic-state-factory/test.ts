import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { createState } from "./task.js";

const state = createState({ count: 0 });
state.set({ count: 1 });
// @ts-expect-error state only accepts the inferred object shape
state.set("invalid");
type Cases = [
  Expect<Equal<ReturnType<typeof state.get>, { count: number }>>,
];
export type TestCases = Cases;
