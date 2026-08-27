import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UploadState } from "./task.js";

type Expected =
  | { status: "idle" }
  | { status: "uploading"; progress: number }
  | { status: "completed"; url: string }
  | { status: "failed"; error: string };
type Cases = [Expect<Equal<UploadState, Expected>>];
// @ts-expect-error uploading requires progress
const invalid: UploadState = { status: "uploading" };
void invalid;
export type TestCases = Cases;
