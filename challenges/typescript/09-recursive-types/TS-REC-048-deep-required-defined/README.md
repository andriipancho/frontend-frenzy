# TS-REC-048 — Require and define nested properties

Implement `DeepRequiredDefined` to require and define nested properties without losing the relationships shown by the contract.

## Constraints

- Recurse through nullish base cases and recursive required-property mapping.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
