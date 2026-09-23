# TS-REC-071 — Derive serialized model shapes

Implement `Serialized` to derive serialized model shapes without losing the relationships shown by the contract.

## Constraints

- Recurse through date and function boundaries before recursive serialization.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- `Date` becomes `string`.
- A function property becomes `never`, since nothing of it survives serialization.
- Everything else keeps its shape and is recursed into.
