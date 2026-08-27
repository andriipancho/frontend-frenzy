import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { asyncMap } from "./task.js";

const result = asyncMap(
  { id: "user-1" },
  async (user: { id: string }) => ({ label: user.id }),
);
type Cases = [
  Expect<Equal<typeof result, Promise<{ label: string }>>>,
];
export type TestCases = Cases;
