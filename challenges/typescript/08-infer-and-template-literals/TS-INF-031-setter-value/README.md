# TS-INF-031 — Infer setter input values

Implement `SetterValue` to infer setter input values, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the input position of an object's set method.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
