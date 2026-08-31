# TS-REC-005 — Add null to nested values

Implement `DeepNullable` to add null to nested values without losing the relationships shown by the contract.

## Constraints

- Recurse through object properties that recurse before adding null.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
