# TS-REC-041 — Resolve nested path values

Implement `PathValue` to resolve nested path values without losing the relationships shown by the contract.

## Constraints

- Recurse through one dot-path segment and the recursively indexed remainder.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
