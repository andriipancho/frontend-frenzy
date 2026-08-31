import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { selectFields } from "./task.js";

const selected = selectFields(
  { id: "u1", score: 12, active: true },
  ["id", "active"] as const,
);
type Cases = [Expect<Equal<typeof selected, (string | boolean)[]>>];
// @ts-expect-error missing is not a valid key
selectFields({ id: "u1" }, ["missing"]);
export type TestCases = Cases;
