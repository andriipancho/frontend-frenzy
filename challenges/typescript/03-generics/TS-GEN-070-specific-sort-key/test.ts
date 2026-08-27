import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SortDescriptor } from "./task.js";

type User = { name: string; createdAt: Date };
type ByName = SortDescriptor<User, "name">;
type Cases = [
  Expect<
    Equal<ByName, { key: "name"; direction: "asc" | "desc" }>
  >,
];
// @ts-expect-error this descriptor is fixed to the name key
const invalid: ByName = { key: "createdAt", direction: "asc" };
export type TestCases = Cases;
