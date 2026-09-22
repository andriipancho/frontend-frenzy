# TS-INF-040 — Strip matching string suffixes

Implement `StripSuffix` to strip matching string suffixes, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the remainder before a supplied template suffix.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Text that ends with the suffix produces the part before it.
- Text that does not end with the suffix is returned unchanged.
