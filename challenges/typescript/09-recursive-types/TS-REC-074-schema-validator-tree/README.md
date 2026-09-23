# TS-REC-074 — Build recursive schema validators

Implement `SchemaValidators` to build recursive schema validators without losing the relationships shown by the contract.

## Constraints

- Recurse through whole-value parser leaves beneath recursive schema structure.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Each leaf becomes `{ parse: (input: unknown) => <leaf> }`.
- The leaf is parsed whole, so a `boolean` leaf produces `(input: unknown) => boolean`.
