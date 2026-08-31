# TS-CND-087 — Select event payload contracts

Implement `EventPayload` to select event payload contracts, while preserving the generic relationships in the contract.

## Constraints

- Model each event member's discriminant with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
