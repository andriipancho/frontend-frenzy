# TS-INF-027 — Infer async return values

Implement `AsyncReturn` to infer async return values, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the value inside a promised function result.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
