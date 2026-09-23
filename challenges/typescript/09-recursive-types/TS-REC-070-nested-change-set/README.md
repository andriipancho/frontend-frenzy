# TS-REC-070 — Build nested change sets

Implement `ChangeSet` to build nested change sets without losing the relationships shown by the contract.

## Constraints

- Recurse through whole-value change leaves beneath recursive domain structure.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Each leaf becomes an object carrying `before` and `after`, both typed as that leaf.
- The leaf is used whole, so a `boolean` leaf produces `{ before: boolean; after: boolean }`.
