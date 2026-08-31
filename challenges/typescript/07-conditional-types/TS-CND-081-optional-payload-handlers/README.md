# TS-CND-081 — Map optional payload handlers

Implement `PayloadHandlers` to map optional payload handlers, while preserving the generic relationships in the contract.

## Constraints

- Model whether undefined belongs to each payload type with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
