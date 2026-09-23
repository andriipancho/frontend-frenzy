# TS-MIX-093 — Design mixed command records

Implement `MixedCommands` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each union member's `type` becomes a key of the record.
- Its value is `(payload: <that member's payload>) => void`, and all members merge into one
  object.
