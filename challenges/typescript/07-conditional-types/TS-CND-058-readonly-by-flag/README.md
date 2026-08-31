# TS-CND-058 — Apply readonly by flag

Implement `ReadonlyIf` to apply readonly by flag, while preserving the generic relationships in the contract.

## Constraints

- Model the locked flag with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
