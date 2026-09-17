# TS-NAR-021 — Constrain grid columns

The layout grid has twelve columns numbered `1` through `12`. Restrict
`GridColumn` to those positions so `0` and `13` are rejected.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept only the twelve numeric literals.
