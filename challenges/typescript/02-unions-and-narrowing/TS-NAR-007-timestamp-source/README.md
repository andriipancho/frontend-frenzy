# TS-NAR-007 — Accept date or epoch timestamps

A timestamp reaches the formatter either as a `Date` instance or as epoch
milliseconds decoded from JSON.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept `Date` and `number`, and nothing else.
