# TS-PROD-034 — Derive a recursive form state tree

Model a nested production structure recursively while respecting arrays, functions, and object boundaries defined by the contract.

## Constraints

- Keep the exported type name and generic inputs.
- Preserve modifiers and boundary behavior shown by the tests.
- Do not use any, fixed depth limits, or hard-coded property names.

## Contract

- Each leaf becomes `{ value: <leaf>; error?: string }`.
- An array is a leaf: it is held whole as one `value` rather than being recursed into.
