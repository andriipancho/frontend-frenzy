# TS-PROD-036 — Model recursive configuration overrides

Model a nested production structure recursively while respecting arrays, functions, and object boundaries defined by the contract.

## Constraints

- Keep the exported type name and generic inputs.
- Preserve modifiers and boundary behavior shown by the tests.
- Do not use any, fixed depth limits, or hard-coded property names.

## Contract

- Every property becomes optional, at every depth.
- An array property is overridden whole: it stays as it is rather than being recursed into.
