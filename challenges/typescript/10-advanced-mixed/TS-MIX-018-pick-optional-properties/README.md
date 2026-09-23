# TS-MIX-018 — Pick advanced optional properties

Implement `PickOptional` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A property is kept when its type admits `undefined` — whether it was declared with `?` or
  its type simply includes `undefined`.
- Kept properties keep their own modifiers.
