# TS-REC-041 — Resolve nested path values

Implement `PathValue` to resolve nested path values without losing the relationships shown by the contract.

## Constraints

- Recurse through one dot-path segment and the recursively indexed remainder.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Path segments are separated by `.` and are followed one at a time.
- A path that does not resolve produces `never`.
