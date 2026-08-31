import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UpdateProjectInput } from "./task.js";

type Expected = {
  name?: string;
  visibility?: "private" | "public";
  archived?: boolean;
};
type Cases = [Expect<Equal<UpdateProjectInput, Expected>>];
export type TestCases = Cases;
