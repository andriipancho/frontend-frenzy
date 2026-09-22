# TS-INF-073 — Parse query parameter contracts

Implement `QueryParameter` to parse query parameter contracts, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from query key and value portions around the first equals marker.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Text containing `=` produces a single-property object whose key is the part before the first
  `=` and whose value is the rest; later `=` characters stay inside the value.
- Text without `=` produces `never`.
