# TS-INF-034 — Infer resolved property values

Implement `ResolvedProperties` to infer resolved property values, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the resolved position of each promise-like property.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
