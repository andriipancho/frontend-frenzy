# TS-REC-075 — Design readonly state snapshots

Implement `StateSnapshot` to design readonly state snapshots without losing the relationships shown by the contract.

## Constraints

- Recurse through promise resolution and function boundaries before readonly recursion.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.
