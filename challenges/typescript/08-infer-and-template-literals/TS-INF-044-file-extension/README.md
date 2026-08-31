# TS-INF-044 — Infer file extensions

Implement `FileExtension` to infer file extensions, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the filename portion after the first dot.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
