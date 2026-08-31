# TS-REC-002 — Make nested properties optional

Implement `DeepPartial` to make nested properties optional without losing the relationships shown by the contract.

## Constraints

- Recurse through leaf boundaries and optional recursive properties.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
