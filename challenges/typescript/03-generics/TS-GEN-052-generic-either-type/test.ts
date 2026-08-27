import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Either } from "./task.js";

type Cases = [Expect<Equal<Either<string, number>, string | number>>];
export type TestCases = Cases;
