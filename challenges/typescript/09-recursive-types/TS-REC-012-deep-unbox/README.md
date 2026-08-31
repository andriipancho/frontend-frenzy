# TS-REC-012 — Unbox nested value wrappers

Implement `DeepUnbox` to unbox nested value wrappers without losing the relationships shown by the contract.

## Constraints

- Recurse through value wrappers before recursive tuple and object traversal.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
