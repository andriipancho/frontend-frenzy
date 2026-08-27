import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleResponse } from "./task.js";

type Expected = ["ok", number] | ["error", string];
type Cases = [Expect<Equal<TupleResponse<number>, Expected>>];
export type TestCases = Cases;
