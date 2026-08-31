# TS-INF-012 — Infer map value types

Implement `MapValue` to infer map value types, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the value position of a readonly map.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
