# TS-REC-011 — Box every nested leaf value

Implement `DeepBox` to box every nested leaf value without losing the relationships shown by the contract.

## Constraints

- Recurse through primitive leaves beneath recursive tuple and object shapes.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Each leaf becomes `{ value: <leaf> }`, and the tuples and objects around it keep their shape.
- A non-object input is boxed directly.
