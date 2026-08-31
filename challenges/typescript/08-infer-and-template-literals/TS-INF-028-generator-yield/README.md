# TS-INF-028 — Infer generator yield types

Implement `GeneratorYield` to infer generator yield types, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the yield position of a generator.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
