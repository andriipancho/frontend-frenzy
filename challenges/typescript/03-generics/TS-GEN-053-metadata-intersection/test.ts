import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { WithMetadata } from "./task.js";

type Cases = [Expect<Equal<WithMetadata<{ id: string }, { cached: boolean }>, { id: string } & { cached: boolean }>>];
export type TestCases = Cases;
