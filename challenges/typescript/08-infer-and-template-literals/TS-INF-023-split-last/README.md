# TS-INF-023 — Split tuple final elements

Implement `SplitLast` to split tuple final elements, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the initial tuple segment and final position.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- A non-empty tuple produces the pair `[everything before the last element, last element]`.
- An empty tuple produces `never`.
