# TS-INF-041 — Split strings once

Implement `SplitOnce` to split strings once, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the segments around the first supplied separator.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Text containing the separator produces the pair `[before, after]`, split at the first
  separator only; later separators stay inside the second element.
- Text without the separator produces a one-element tuple holding the whole text.
