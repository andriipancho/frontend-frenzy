import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { filterByProperty } from "./task.js";

const rows = [{ label: "a", score: 4 }];
const result = filterByProperty(rows, "score", (score) => {
  type ParameterCase = Expect<Equal<typeof score, number>>;
  const checked: ParameterCase = true;
  return checked && score > 2;
});
type Cases = [Expect<Equal<typeof result, { label: string; score: number }[]>>];
// @ts-expect-error missing is not a row property
filterByProperty(rows, "missing", () => true);
export type TestCases = Cases;
