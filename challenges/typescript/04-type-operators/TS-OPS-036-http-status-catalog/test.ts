import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StatusCode, StatusName } from "./task.js";

type Cases = [
  Expect<Equal<StatusName, "ok" | "created" | "notFound">>,
  Expect<Equal<StatusCode, 200 | 201 | 404>>,
];
export type TestCases = Cases;
