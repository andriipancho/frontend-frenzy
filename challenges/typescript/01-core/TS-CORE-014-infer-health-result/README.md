# TS-CORE-014 — Infer a health-check result

Preserve the concrete result fields returned by `healthCheck` instead of exposing an open-ended record.

## Constraints

- Keep both returned fields.
- Do not create a manual return interface.
- Do not use an assertion.
