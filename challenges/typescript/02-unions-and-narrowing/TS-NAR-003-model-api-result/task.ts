// TODO: replace the permissive model with explicit valid states.
export type ApiResult<T> = | {
  status: "success";
  data: T;
  error?: never;
} | {
  status: "error";
  data?: never;
  error: string;
};
