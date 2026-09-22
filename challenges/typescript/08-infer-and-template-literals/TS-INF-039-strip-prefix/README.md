# TS-INF-039 — Strip matching string prefixes

Implement `StripPrefix` to strip matching string prefixes, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the remainder after a supplied template prefix.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Text that starts with the prefix produces the remainder after it.
- Text that does not start with the prefix is returned unchanged.
