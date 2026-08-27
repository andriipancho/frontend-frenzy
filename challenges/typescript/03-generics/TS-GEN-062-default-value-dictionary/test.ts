import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ValueDictionary } from "./task.js";

type Strings = ValueDictionary;
type Flags = ValueDictionary<boolean>;
type Cases = [
  Expect<Equal<Strings[string], string>>,
  Expect<Equal<Flags[string], boolean>>,
];
export type TestCases = Cases;
