# TS-MIX-019 — Pick advanced object properties

Implement `PickObject` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A property is kept when its value is an object type, and functions are object types, so a
  method is kept alongside a nested object.
