# TS-REC-069 — Build nested state selectors

Implement `SelectorTree` to build nested state selectors without losing the relationships shown by the contract.

## Constraints

- Recurse through whole-value selector leaves beneath state tuples and objects.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Each leaf becomes a function taking no arguments and returning that leaf.
- The leaf is selected whole, so a `boolean` leaf produces `() => boolean`.
