# TS-REC-001 — Make nested values readonly

Implement `DeepReadonly` to make nested values readonly without losing the relationships shown by the contract.

## Constraints

- Recurse through primitive and function boundaries before recursive object mapping.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
