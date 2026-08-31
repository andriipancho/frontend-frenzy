# TS-CND-040 — Detect union inputs

Implement `IsUnion` to detect union inputs, while preserving the generic relationships in the contract.

## Constraints

- Model whether distribution exposes a member narrower than the whole with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
