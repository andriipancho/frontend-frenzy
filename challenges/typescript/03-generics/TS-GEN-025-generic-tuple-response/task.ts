export type TupleResponse<T> =
  | [status: "ok", data: unknown]
  | [status: "error", message: string];
