# TS-MIX-085 — Design mixed form controls

Implement `MixedControl` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- The result carries `kind`, the value's primitive kind, and `value`, the value itself.
- In this order: `string` produces `"string"`, `number` produces `"number"`, `boolean`
  produces `"boolean"`, and everything else produces `"other"`.
