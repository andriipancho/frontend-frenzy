# TS-REC-007 — Resolve nested promises

Implement `DeepAwaited` to resolve nested promises without losing the relationships shown by the contract.

## Constraints

- Recurse through promise layers until a non-promise base case.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
