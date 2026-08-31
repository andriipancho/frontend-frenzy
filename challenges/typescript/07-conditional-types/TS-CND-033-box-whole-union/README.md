# TS-CND-033 — Box a union as one value

Implement `BoxWhole` to box a union as one value, while preserving the generic relationships in the contract.

## Constraints

- Model the union without member-wise distribution with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
