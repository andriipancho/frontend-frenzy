# TS-MIX-091 — Design mixed endpoint maps

Implement `MixedEndpoints` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each endpoint key keeps its name.
- Its value becomes `(request: <request>) => Promise<<response>>`, taken from that endpoint's
  own contract.
