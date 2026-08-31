# TS-REC-054 — Build nested validation flags

Implement `DeepValidationFlags` to build nested validation flags without losing the relationships shown by the contract.

## Constraints

- Recurse through boolean leaf flags below tuple and object recursion.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
