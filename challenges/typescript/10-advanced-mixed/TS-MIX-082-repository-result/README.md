# TS-MIX-082 — Design mixed repository results

Implement `RepositoryResult` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- The result is the union of a hit — `{ found: true; value: T }` — and a miss carrying
  `found: false` and a `reason`.
- `Strict` fixes that reason: `true` narrows it to the literal `"missing"`, `false` leaves it
  as `string`.
