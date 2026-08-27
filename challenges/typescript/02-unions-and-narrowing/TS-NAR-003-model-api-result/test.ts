import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import type { ApiResult } from "./task.js";

type Expected<T> =
  | { status: "success"; data: T; error?: never }
  | { status: "error"; error: string; data?: never };

type Cases = [Expect<Equal<ApiResult<number>, Expected<number>>>];

const success: ApiResult<number> = { status: "success", data: 42 };
const failure: ApiResult<number> = { status: "error", error: "offline" };

// @ts-expect-error success requires data
const missingData: ApiResult<number> = { status: "success" };
// @ts-expect-error failure cannot contain success data
const mixedState: ApiResult<number> = { status: "error", error: "offline", data: 42 };

void success;
void failure;
void missingData;
void mixedState;

export type TestCases = Cases;
