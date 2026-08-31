# TS-CND-074 — Omit properties by value type

Implement `OmitByValue` to omit properties by value type, while preserving the generic relationships in the contract.

## Constraints

- Model each property's assignability to the omitted value type with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
