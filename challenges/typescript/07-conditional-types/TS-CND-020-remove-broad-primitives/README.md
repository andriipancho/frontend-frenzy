# TS-CND-020 — Remove broad primitive types

Implement `LiteralMembers` to remove broad primitive types, while preserving the generic relationships in the contract.

## Constraints

- Model literal primitive members rather than their broad primitive with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
