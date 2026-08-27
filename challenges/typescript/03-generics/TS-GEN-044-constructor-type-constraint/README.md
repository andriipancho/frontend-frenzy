# TS-GEN-044 — Constrain a constructor type

Make `ConstructorOnly<T>` accept constructable types and reject ordinary functions.

## Constraints

- Preserve constructor signatures.
- Reject non-constructable callbacks.
- Avoid any in the constraint.
