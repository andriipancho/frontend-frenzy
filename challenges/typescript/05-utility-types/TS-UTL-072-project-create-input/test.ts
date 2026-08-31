import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CreateProjectInput } from "./task.js";

type Expected = {
  name: string;
  ownerId: string;
  visibility: "private" | "public";
};
type Cases = [Expect<Equal<CreateProjectInput, Expected>>];
export type TestCases = Cases;
