# TS-CND-064 — Normalize values to readonly collections

Implement `AsReadonlyCollection` to normalize values to readonly collections, while preserving the generic relationships in the contract.

## Constraints

- Model existing readonly-compatible array shapes with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
