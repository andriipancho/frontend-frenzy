# TS-CND-077 — Resolve asynchronous properties

Implement `ResolveProperties` to resolve asynchronous properties, while preserving the generic relationships in the contract.

## Constraints

- Model whether each property is promise-like with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.
