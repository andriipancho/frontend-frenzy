# TS-INF-072 — Build inferred file descriptors

Implement `FileDescriptor` to build inferred file descriptors, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from base and extension portions of a filename.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.
