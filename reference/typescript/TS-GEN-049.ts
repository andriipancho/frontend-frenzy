export type Outcome<T, E> =
  | { ok: true; data: T }
  | { ok: false; error: E };
