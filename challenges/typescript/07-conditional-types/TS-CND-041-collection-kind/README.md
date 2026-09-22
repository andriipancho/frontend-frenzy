# TS-CND-041 — Classify collection types

Implement `CollectionKind` to classify collection types, while preserving the generic relationships in the contract.

## Constraints

- Model each supported collection shape in precedence order with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

In this order:

- readonly and mutable arrays produce `"array"`;
- `Map` produces `"map"`;
- `Set` produces `"set"`;
- everything else produces `"other"`.
