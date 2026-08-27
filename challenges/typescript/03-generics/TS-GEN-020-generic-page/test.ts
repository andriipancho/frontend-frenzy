import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Page } from "./task.js";

type User = { id: string };
type Cases = [Expect<Equal<Page<User>["items"], User[]>>];
export type TestCases = Cases;
