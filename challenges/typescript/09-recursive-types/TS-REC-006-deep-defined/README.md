# TS-REC-006 — Remove nested nullish members

Implement `DeepDefined` to remove nested nullish members without losing the relationships shown by the contract.

## Constraints

- Recurse through nullish base cases before recursive object mapping.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
