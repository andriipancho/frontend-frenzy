# TS-REC-021 — Drop a counted tuple prefix

Implement `DropTuple` to drop a counted tuple prefix without losing the relationships shown by the contract.

## Constraints

- Recurse through a counter accumulator and the remaining tuple.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- A count of zero returns the tuple unchanged.
- A count larger than the tuple's length produces `[]`.
