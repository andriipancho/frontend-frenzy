# TS-INF-043 — Infer path tail segments

Implement `PathTail` to infer path tail segments, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the path remainder after the first separator.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
