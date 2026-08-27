# TS-GEN-043 — Constrain a callable type

Make `CallableOnly<T>` reject non-function types while preserving valid signatures.

## Constraints

- Accept arbitrary function signatures.
- Reject objects and primitives.
- Return T unchanged.
