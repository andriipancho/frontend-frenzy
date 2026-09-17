# TS-NAR-022 — Constrain log levels

The local logger emits four levels: `"debug"`, `"info"`, `"warn"`, and
`"error"`. Restrict `LogLevel` to them.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept only those four levels, exactly as written.
