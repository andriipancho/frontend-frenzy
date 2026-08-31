import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyParameters } from "./task.js";

type Handler = (id: string, retry?: boolean) => Promise<void>;
type Expected = [id: string, retry?: boolean];
type Cases = [Expect<Equal<MyParameters<Handler>, Expected>>];
export type TestCases = Cases;
