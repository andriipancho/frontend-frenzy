# TS-GEN-004 — Preserve an entity in a factory

Implement `createEntity` so it accepts objects with a string `id`, preserves all caller-specific fields, and adds `createdAt` as a `Date`.

## Constraints

- Reject values without a string `id`.
- Preserve literal and additional property information.
- Do not use `any` or assertions.
