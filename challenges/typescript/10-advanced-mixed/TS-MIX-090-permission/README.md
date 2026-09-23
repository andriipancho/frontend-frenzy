# TS-MIX-090 — Design mixed permissions

Implement `MixedPermission` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- `owner` may read, write and delete; `editor` may read and write; `viewer` may only read.
- The result is `true` when the action is permitted and `false` otherwise, decided one action
  at a time, so a union of actions produces the union of the answers.
