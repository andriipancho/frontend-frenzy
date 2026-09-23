# TS-REC-073 — Build recursive relation includes

Implement `IncludeTree` to build recursive relation includes without losing the relationships shown by the contract.

## Constraints

- Recurse through boolean selection at every relation with optional deeper traversal.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Every property is optional and is either `boolean` — included or not — or, for a nested
  relation, an include tree of its own.
- A non-object input produces `boolean`.
