# TS-GEN-042 — Constrain an object key alias

Limit `ObjectKey<T>` to object models before deriving their keys.

## Constraints

- Reject primitive type arguments.
- Return keyof T.
- Keep the alias generic.
