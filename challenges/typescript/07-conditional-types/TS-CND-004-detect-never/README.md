# TS-CND-004 — Detect never safely

Implement `IsNever` to detect never safely, while preserving the generic relationships in the contract.

## Constraints

- Model never as a whole type with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
