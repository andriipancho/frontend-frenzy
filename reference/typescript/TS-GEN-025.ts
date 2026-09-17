export type TupleResponse<T> =
  | [status: "ok", data: T]
  | [status: "error", message: string];
