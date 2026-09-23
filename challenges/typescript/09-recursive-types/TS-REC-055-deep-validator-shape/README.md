# TS-REC-055 — Build nested validator functions

Implement `DeepValidators` to build nested validator functions without losing the relationships shown by the contract.

## Constraints

- Recurse through whole-value type-predicate leaves below tuple and object recursion.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Each leaf becomes the type predicate `(input: unknown) => input is <leaf>`.
- The leaf is checked whole, so a `boolean` leaf produces one predicate for `boolean` rather
  than one for `true` and one for `false`.
