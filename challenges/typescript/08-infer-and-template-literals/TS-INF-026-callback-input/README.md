# TS-INF-026 — Infer callback input types

Implement `CallbackInput` to infer callback input types, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the parameter of a callback parameter.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
