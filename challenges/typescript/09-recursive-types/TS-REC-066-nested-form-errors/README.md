# TS-REC-066 — Model nested form errors

Implement `FormErrors` to model nested form errors without losing the relationships shown by the contract.

## Constraints

- Recurse through optional error leaves below tuple and object form structure.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
