# TS-REC-046 — Replace functions with deep results

Implement `DeepFunctionResults` to replace functions with deep results without losing the relationships shown by the contract.

## Constraints

- Recurse through promise boundaries and function results before recursive object traversal.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- A function is replaced by its return type, repeatedly, so a function returning a function
  collapses to the final result.
- A promise is a boundary: a promised return keeps its `Promise<…>` wrapper rather than being
  resolved or mapped.
