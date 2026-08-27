export type Outcome<T, E> =
  | { ok: true; data: unknown }
  | { ok: false; error: unknown };
