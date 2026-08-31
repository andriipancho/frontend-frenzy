# TS-UTL-072 — Derive a project create input

Create a production input type without database-generated project fields.

## Constraints

- Exclude id and both timestamps.
- Require every caller-supplied project field.
- Keep `Project` as the only field source.
