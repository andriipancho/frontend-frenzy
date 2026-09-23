# TS-MIX-010 — Derive advanced property-key keys

Implement `PropertyKeyKeys` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A key counts when its value can itself serve as a property key — `string`, `number` or
  `symbol`.
- `boolean` and plain `object` values do not count.
