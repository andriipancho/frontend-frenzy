# TS-INF-045 — Infer file base names

Implement `FileBaseName` to infer file base names, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the filename portion before the first dot.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
