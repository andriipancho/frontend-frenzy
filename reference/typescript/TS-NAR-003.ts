export type ApiResult<T> =
  | { status: "success"; data: T; error?: never }
  | { status: "error"; error: string; data?: never };
