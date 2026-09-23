# TS-INF-025 — Infer tuple prefix and suffix

Implement `PrefixSuffix` to infer tuple prefix and suffix, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from both tuple ends and the segment between them.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- The result is an object carrying `prefix` (the first element), `middle` (the tuple between
  the ends), and `suffix` (the last element).
- A tuple of fewer than two elements produces `never`.
