# TS-MIX-087 — Design mixed route guards

Implement `MixedGuard` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A contract carrying `roles` produces `{ kind: "roles"; role: … }`, where `role` is the union
  of the listed role names.
- With no roles, `auth: true` produces `{ kind: "auth" }` and `auth: false` produces
  `{ kind: "public" }`.
