# TS-INF-035 — Infer identifier property types

Implement `IdentifierOf` to infer identifier property types, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the id property position.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
