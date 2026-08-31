import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FirstParameter } from "./task.js";

type Handler = (request: { id: string }, timeout: number) => void;
type Cases = [
  Expect<Equal<FirstParameter<Handler>, { id: string }>>,
];
export type TestCases = Cases;
