# TS-OPS-005 — Restrict a field check

Make `hasField` accept only property names known on the supplied object.

## Constraints

- Preserve the runtime `in` check.
- Infer keys from each object argument.
- Reject unrelated property names.
