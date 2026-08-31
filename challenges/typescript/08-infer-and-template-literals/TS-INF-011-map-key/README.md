# TS-INF-011 — Infer map key types

Implement `MapKey` to infer map key types, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the key position of a readonly map.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
