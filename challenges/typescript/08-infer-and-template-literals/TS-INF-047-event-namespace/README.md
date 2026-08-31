# TS-INF-047 — Infer event namespaces

Implement `EventNamespace` to infer event namespaces, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the portion before an event namespace separator.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
