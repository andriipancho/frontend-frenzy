# TS-MIX-083 — Design mixed cache results

Implement `MixedCache` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A hit produces `{ hit: true; value: T }`.
- A miss produces `{ hit: false }` alone, with no value to carry.
