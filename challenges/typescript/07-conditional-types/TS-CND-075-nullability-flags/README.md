# TS-CND-075 — Map property nullability flags

Implement `NullabilityFlags` to map property nullability flags, while preserving the generic relationships in the contract.

## Constraints

- Model whether null is assignable to each property with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
