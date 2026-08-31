import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TransitionTable, Transition } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TransitionTable<Transition>,
      { draft: "review" | "archived"; review: "published" | "draft"; published: "archived" }
    >
  >,
];

export type TestCases = Cases;
