import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { endpoints } from "./task.js";

type Cases = [
  Expect<Equal<typeof endpoints[0], readonly ["GET", "/users"]>>,
  Expect<Equal<typeof endpoints[1][0], "POST">>,
];
// @ts-expect-error endpoints must be readonly
endpoints.push(["GET", "/health"]);
export type TestCases = Cases;
