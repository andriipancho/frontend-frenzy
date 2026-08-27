import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RequestStatus } from "./task.js";

type Expected = "idle" | "loading" | "success" | "error";
type Cases = [Expect<Equal<RequestStatus, Expected>>];
const loading: RequestStatus = "loading";
// @ts-expect-error unsupported request state
const invalid: RequestStatus = "done";
void loading;
void invalid;
export type TestCases = Cases;
