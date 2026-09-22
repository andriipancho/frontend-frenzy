# TS-INF-072 — Build inferred file descriptors

Implement `FileDescriptor` to build inferred file descriptors, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from base and extension portions of a filename.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- The result is an object carrying `name`, `extension`, and `original` — the unchanged input.
- A name containing a dot splits at the first dot into `name` and `extension`.
- A name without a dot keeps the whole name as `name` and produces `never` for `extension`.
