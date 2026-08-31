# TS-INF-030 — Infer getter result values

Implement `GetterValue` to infer getter result values, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the return position of an object's get method.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
