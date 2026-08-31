import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KeyNames } from "./task.js";

type Cases = [Expect<Equal<KeyNames<{ id: string; active: boolean }>, { id: "id"; active: "active" }>>];
export type TestCases = Cases;
