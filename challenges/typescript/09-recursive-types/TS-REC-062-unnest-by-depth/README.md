# TS-REC-062 — Unnest values to a fixed depth

Implement `UnnestValue` to unnest values to a fixed depth without losing the relationships shown by the contract.

## Constraints

- Recurse through a depth accumulator and inferred value wrappers.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Each layer removed is a `{ value: … }` wrapper.
- Unwrapping stops early once the value is no longer a wrapper, so a depth larger than the
  nesting is not an error.
- A depth of zero returns the input unchanged.
