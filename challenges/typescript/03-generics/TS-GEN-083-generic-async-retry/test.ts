import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { retry } from "./task.js";

const result = retry(async () => ({ token: "abc" }));
type Cases = [
  Expect<Equal<typeof result, Promise<{ token: string }>>>,
];
export type TestCases = Cases;
