import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Repository } from "./task.js";

type User = { id: string };
type Expected = { findById(id: string): User | undefined; findAll(): User[] };
type Cases = [Expect<Equal<Repository<User>, Expected>>];
export type TestCases = Cases;
