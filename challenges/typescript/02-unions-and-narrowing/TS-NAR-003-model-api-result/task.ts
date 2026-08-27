// TODO: replace the permissive model with explicit valid states.
export type ApiResult<T> = {
  status: "success" | "error";
  data?: T;
  error?: string;
};
