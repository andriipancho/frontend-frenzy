import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CallbackArguments } from "./task.js";

type Callback = (
  id: string,
  count: number,
  active?: boolean,
) => void;
type Expected = [id: string, count: number, active?: boolean];
type Cases = [Expect<Equal<CallbackArguments<Callback>, Expected>>];
export type TestCases = Cases;
