# TS-GEN-067 — Relate assigned fields

Constrain `assignField` so its value always matches the chosen object field.

## Constraints

- Infer the object type from the first argument.
- Infer one concrete key per call.
- Reject mismatched values at compile time.
