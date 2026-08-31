# TS-INF-009 — Infer array or promise contents

Implement `ContentValue` to infer array or promise contents, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from array and promise content positions in precedence order.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
