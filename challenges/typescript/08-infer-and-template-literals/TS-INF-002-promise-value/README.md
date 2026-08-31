# TS-INF-002 — Infer promise values

Implement `PromiseValue` to infer promise values, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the resolved position of a promise-like type.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
