import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Repository, RepositoryInstance } from "./task.js";

type Cases = [Expect<Equal<RepositoryInstance, Repository>>];
export type TestCases = Cases;
