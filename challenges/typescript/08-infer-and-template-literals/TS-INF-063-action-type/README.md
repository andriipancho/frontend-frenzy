# TS-INF-063 — Generate namespaced action types

Implement `ActionType` to generate namespaced action types, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from two uppercased action segments around a slash.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
