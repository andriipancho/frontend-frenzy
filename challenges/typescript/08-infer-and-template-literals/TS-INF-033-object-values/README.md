# TS-INF-033 — Infer object value unions

Implement `ObjectValues` to infer object value unions, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the common inferred position across all object properties.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
