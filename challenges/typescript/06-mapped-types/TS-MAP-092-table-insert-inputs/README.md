# TS-MAP-092 — Map table insert inputs

Create insert input types for every table by removing generated database fields.

## Constraints

- Preserve table keys.
- Remove id and createdAt from each row.
- Keep all caller-provided fields required.
