export type DataResult<T> =
  | { ok: true; data: unknown }
  | { ok: false; error: string };
