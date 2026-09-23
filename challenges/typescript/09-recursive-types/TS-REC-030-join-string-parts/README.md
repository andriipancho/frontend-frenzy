# TS-REC-030 — Join string tuples recursively

Implement `JoinText` to join string tuples recursively without losing the relationships shown by the contract.

## Constraints

- Recurse through the first string part and recursively joined remainder.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- The separator goes between parts only, never before the first or after the last.
- An empty tuple produces `""`.
