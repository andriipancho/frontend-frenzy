# TS-REC-012 — Unbox nested value wrappers

Implement `DeepUnbox` to unbox nested value wrappers without losing the relationships shown by the contract.

## Constraints

- Recurse through value wrappers before recursive tuple and object traversal.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- A `{ value: … }` wrapper is replaced by what it holds, repeatedly, so nested wrappers
  collapse to the innermost value.
- Tuples and objects that are not wrappers are traversed property by property.
