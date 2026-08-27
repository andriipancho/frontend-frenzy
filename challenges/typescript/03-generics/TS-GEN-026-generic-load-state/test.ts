import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LoadState } from "./task.js";

type Expected =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "failure"; error: string };
type Cases = [Expect<Equal<LoadState<string[]>, Expected>>];
export type TestCases = Cases;
