# TS-INF-042 — Infer path head segments

Implement `PathHead` to infer path head segments, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the segment before the first path separator.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
