# TS-CND-066 — Select tuple first or fallback

Implement `FirstOr` to select tuple first or fallback, while preserving the generic relationships in the contract.

## Constraints

- Model the empty tuple shape before indexed access with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
