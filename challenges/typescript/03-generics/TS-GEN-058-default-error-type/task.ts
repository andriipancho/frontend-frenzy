export type GenericResult<T, E = Error> =
  | { ok: true; data: unknown }
  | { ok: false; error: unknown };
