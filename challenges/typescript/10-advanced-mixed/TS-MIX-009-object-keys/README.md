# TS-MIX-009 — Derive advanced object keys

Implement `ObjectKeys` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A key counts when its value is an object type, and functions are object types, so a method
  key is selected alongside a nested-object key.
