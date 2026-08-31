# TS-INF-008 — Infer boxed values

Implement `BoxedValue` to infer boxed values, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the value property of an object shape.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
