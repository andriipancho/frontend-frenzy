# TS-MIX-029 — Box mixed property values

Implement `PropertyBoxes` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each value becomes an object carrying `value`, the property type, and `key`, that property's
  own name as a literal.
