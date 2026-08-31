# TS-REC-045 — Wrap nested leaves in promises

Implement `DeepPromises` to wrap nested leaves in promises without losing the relationships shown by the contract.

## Constraints

- Recurse through primitive and function leaves below tuple and object recursion.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
