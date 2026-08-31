# TS-REC-064 — Limit recursive optional depth

Implement `PartialToDepth` to limit recursive optional depth without losing the relationships shown by the contract.

## Constraints

- Recurse through a shared depth counter that stops optional mapping.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
