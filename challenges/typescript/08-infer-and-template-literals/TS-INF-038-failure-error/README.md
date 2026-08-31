# TS-INF-038 — Infer failed result errors

Implement `FailureError` to infer failed result errors, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the error position of failed result members.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
