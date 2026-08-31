# TS-REC-072 — Build nested event handler trees

Implement `HandlerTree` to build nested event handler trees without losing the relationships shown by the contract.

## Constraints

- Recurse through whole-value handler leaves beneath nested event namespaces.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
