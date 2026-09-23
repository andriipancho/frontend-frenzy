# TS-MIX-020 — Pick advanced property-key properties

Implement `PickPropertyKey` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A property is kept when its value can itself serve as a property key — `string`, `number`
  or `symbol`.
- `boolean` and plain `object` values are dropped.
