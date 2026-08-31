# TS-CND-017 — Remove callable members

Implement `WithoutFunctions` to remove callable members, while preserving the generic relationships in the contract.

## Constraints

- Model (...args: never[]) => unknown with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
