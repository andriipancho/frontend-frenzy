# TS-INF-070 — Parse topic event pairs

Implement `TopicEvent` to parse topic event pairs, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from topic and event portions around the first colon.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
