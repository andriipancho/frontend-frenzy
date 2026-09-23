# TS-REC-022 — Take a counted tuple prefix

Implement `TakeTuple` to take a counted tuple prefix without losing the relationships shown by the contract.

## Constraints

- Recurse through a result accumulator and the unconsumed tuple.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- A count of zero produces `[]`.
- A count larger than the tuple's length produces the whole tuple.
