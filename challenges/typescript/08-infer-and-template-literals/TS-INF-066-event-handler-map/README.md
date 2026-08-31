# TS-INF-066 — Generate event handler maps

Implement `EventHandlers` to generate event handler maps, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from each string event key and its related payload.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
