export type DataResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };
