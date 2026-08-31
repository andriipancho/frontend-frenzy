# TS-INF-048 — Infer namespaced event names

Implement `NamespacedEvent` to infer namespaced event names, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the portion after an event namespace separator.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
