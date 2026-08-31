# TS-INF-069 — Parse command descriptors

Implement `CommandDescriptor` to parse command descriptors, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from domain and action portions around the first dot.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
