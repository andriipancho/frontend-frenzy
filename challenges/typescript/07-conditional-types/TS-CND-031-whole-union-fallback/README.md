# TS-CND-031 — Fall back for an incompatible union

Implement `WholeUnionOr` to fall back for an incompatible union, while preserving the generic relationships in the contract.

## Constraints

- Model the complete union's assignability with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
