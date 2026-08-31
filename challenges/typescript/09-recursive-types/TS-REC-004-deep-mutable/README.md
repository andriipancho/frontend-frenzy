# TS-REC-004 — Remove nested readonly modifiers

Implement `DeepMutable` to remove nested readonly modifiers without losing the relationships shown by the contract.

## Constraints

- Recurse through function boundaries and recursive readonly removal.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
