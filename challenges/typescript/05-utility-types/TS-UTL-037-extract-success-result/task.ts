export type ApiResult =
  | { status: "ok"; data: { id: string } }
  | { status: "validation-error"; issues: string[] }
  | { status: "network-error"; retryable: boolean };

export type SuccessResult = ApiResult;
