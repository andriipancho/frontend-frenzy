# TS-INF-055 — Generate event handler names

Implement `HandlerName` to generate event handler names, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the event name after capitalization.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
