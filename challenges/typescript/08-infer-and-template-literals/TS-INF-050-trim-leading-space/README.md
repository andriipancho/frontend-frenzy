# TS-INF-050 — Trim one leading space

Implement `TrimLeadingSpace` to trim one leading space, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the remainder after exactly one leading space.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Text starting with a space produces the remainder after that one space, so a second leading
  space survives.
- Text not starting with a space is returned unchanged.
