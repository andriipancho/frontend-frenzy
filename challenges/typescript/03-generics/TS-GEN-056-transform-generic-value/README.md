# TS-GEN-056 — Transform between generic values

Make `transformValue` infer independent source and result types from its arguments.

## Constraints

- Preserve the input type in the callback.
- Infer the callback result.
- Do not use unknown or assertions.
