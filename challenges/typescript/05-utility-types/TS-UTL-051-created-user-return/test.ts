import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CreatedUser } from "./task.js";

type Expected = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  createdAt: Date;
};
type Cases = [Expect<Equal<CreatedUser, Expected>>];
export type TestCases = Cases;
