# TS-REC-050 — Label every nested leaf type

Implement `DeepTypeLabels` to label every nested leaf type without losing the relationships shown by the contract.

## Constraints

- Recurse through primitive label base cases before tuple and object recursion.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
