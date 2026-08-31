# TS-REC-046 — Replace functions with deep results

Implement `DeepFunctionResults` to replace functions with deep results without losing the relationships shown by the contract.

## Constraints

- Recurse through promise boundaries and function results before recursive object traversal.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
