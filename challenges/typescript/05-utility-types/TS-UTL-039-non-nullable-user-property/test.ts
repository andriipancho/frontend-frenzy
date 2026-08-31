import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LoadedUser } from "./task.js";

type Cases = [
  Expect<Equal<LoadedUser, { id: string; name: string }>>,
];
export type TestCases = Cases;
