# TS-PROD-035 — Convert domain models to JSON-safe shapes

Model a nested production structure recursively while respecting arrays, functions, and object boundaries defined by the contract.

## Constraints

- Keep the exported type name and generic inputs.
- Preserve modifiers and boundary behavior shown by the tests.
- Do not use any, fixed depth limits, or hard-coded property names.
