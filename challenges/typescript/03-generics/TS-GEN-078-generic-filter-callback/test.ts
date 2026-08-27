import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { filterValues } from "./task.js";

const active = filterValues(
  [{ active: true }, { active: false }],
  (value: { active: boolean }) => value.active,
);
type Cases = [
  Expect<Equal<typeof active, { active: boolean }[]>>,
];
export type TestCases = Cases;
