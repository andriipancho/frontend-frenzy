# TS-INF-048 — Infer namespaced event names

Implement `NamespacedEvent` to infer namespaced event names, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the portion after an event namespace separator.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- The namespace separator is `:`.
- An event containing a separator produces everything after the first one, later separators
  included.
- An event without a separator is returned unchanged.
