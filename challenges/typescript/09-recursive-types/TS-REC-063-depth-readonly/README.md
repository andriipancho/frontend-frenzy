# TS-REC-063 — Limit recursive readonly depth

Implement `ReadonlyToDepth` to limit recursive readonly depth without losing the relationships shown by the contract.

## Constraints

- Recurse through a shared depth counter that stops recursive mapping.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
