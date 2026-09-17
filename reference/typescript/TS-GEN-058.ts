export type GenericResult<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };
