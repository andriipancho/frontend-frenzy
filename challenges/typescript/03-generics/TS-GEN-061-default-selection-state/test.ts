import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SelectionState } from "./task.js";

type Empty = SelectionState;
type UserSelection = SelectionState<{ id: string }>;
type Cases = [
  Expect<Equal<Empty["selected"], null>>,
  Expect<Equal<UserSelection["selected"], { id: string } | null>>,
];
export type TestCases = Cases;
