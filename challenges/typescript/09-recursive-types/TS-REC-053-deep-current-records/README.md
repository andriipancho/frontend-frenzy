# TS-REC-053 — Wrap nested leaves as current values

Implement `DeepCurrent` to wrap nested leaves as current values without losing the relationships shown by the contract.

## Constraints

- Recurse through leaf wrappers below tuple and object recursion.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
