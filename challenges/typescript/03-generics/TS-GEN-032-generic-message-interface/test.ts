import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Message } from "./task.js";

type Cases = [Expect<Equal<Message<boolean>, { id: string; payload: boolean }>>];
export type TestCases = Cases;
