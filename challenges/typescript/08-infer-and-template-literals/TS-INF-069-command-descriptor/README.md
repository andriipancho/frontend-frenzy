# TS-INF-069 — Parse command descriptors

Implement `CommandDescriptor` to parse command descriptors, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from domain and action portions around the first dot.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- A name containing a dot produces an object carrying `domain` — the part before the first dot
  — and `action`, the rest; later dots stay inside `action`.
- A name without a dot produces `never`.
