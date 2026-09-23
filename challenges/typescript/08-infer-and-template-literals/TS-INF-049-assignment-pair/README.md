# TS-INF-049 — Parse assignment pairs

Implement `AssignmentPair` to parse assignment pairs, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the key and value around the first equals marker.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Text containing `=` produces an object carrying `key` — the part before the first `=` — and
  `value`, the rest; later `=` characters stay inside `value`.
- Text without `=` produces `never`.
