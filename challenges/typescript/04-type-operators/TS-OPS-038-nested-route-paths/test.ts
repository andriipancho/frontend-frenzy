import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RoutePath } from "./task.js";

type Cases = [Expect<Equal<RoutePath, "/users" | "/users/:id">>];
export type TestCases = Cases;
