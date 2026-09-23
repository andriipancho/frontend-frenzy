# TS-MIX-050 — Convert mixed union members to tuples

Implement `UnionTuples` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each member becomes the pair `[type, payload]`, taken from its own `type` and `payload`
  properties.
- The result is the union of those pairs, one per member.
