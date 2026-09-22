# TS-INF-067 — Infer generated getter results

Implement `GetterResults` to infer generated getter results, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from getter method names and their return positions.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Only properties whose name starts with `get` are kept; every other property is dropped.
- The key is the rest of the name, uncapitalized, and the value is that method's return type.
