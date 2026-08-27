import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Column } from "./task.js";

type User = { name: string; score: number };
type ScoreColumn = Column<User, "score">;
type Cases = [
  Expect<Equal<Parameters<ScoreColumn["render"]>[0], number>>,
  Expect<Equal<ReturnType<ScoreColumn["render"]>, string>>,
];
export type TestCases = Cases;
