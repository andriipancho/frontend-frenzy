import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SelectorRegistry, State } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SelectorRegistry<State>,
      { selectUser: (state: State) => { id: string; name: string }; selectOnline: (state: State) => boolean; selectNotices: (state: State) => readonly string[] }
    >
  >,
];

export type TestCases = Cases;
