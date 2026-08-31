# TS-INF-010 — Infer asynchronous function values

Implement `AsyncFunctionValue` to infer asynchronous function values, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the resolved position inside a function return.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
