# TS-INF-051 — Unwrap bracketed strings

Implement `UnwrapBrackets` to unwrap bracketed strings, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the text enclosed by one matching bracket pair.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Text wrapped in `[` and `]` produces the text between the outermost pair, inner brackets
  included.
- Text that is not bracketed is returned unchanged.
