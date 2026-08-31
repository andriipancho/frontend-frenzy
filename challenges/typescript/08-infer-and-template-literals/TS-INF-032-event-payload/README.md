# TS-INF-032 — Infer event payload types

Implement `InferredPayload` to infer event payload types, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the payload position of an event contract.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
