# TS-REC-043 — Replace matching nested values

Implement `DeepReplace` to replace matching nested values without losing the relationships shown by the contract.

## Constraints

- Recurse through replacement base cases before recursive object mapping.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- A value is replaced when it is assignable to the searched type, so replacing `number` also
  replaces the literals `1` and `2`.
- Values that do not match are recursed into and otherwise left alone.
