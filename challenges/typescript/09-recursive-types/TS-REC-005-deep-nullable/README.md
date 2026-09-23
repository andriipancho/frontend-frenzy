# TS-REC-005 — Add null to nested values

Implement `DeepNullable` to add null to nested values without losing the relationships shown by the contract.

## Constraints

- Recurse through object properties that recurse before adding null.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Every property type gains `| null` after it has been recursed into, so an object-valued
  property is itself nullable and so are its own properties.
- Null is added to properties, not to the root: a non-object input is returned unchanged.
