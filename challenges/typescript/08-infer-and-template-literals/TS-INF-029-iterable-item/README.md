# TS-INF-029 — Infer iterable item types

Implement `IterableItem` to infer iterable item types, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the item position of an iterable.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
