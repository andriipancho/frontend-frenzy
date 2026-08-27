# TS-CORE-031 — Protect an entity ID

Make an entity's `id` immutable after construction while allowing its display name to change.

## Constraints

- Keep both properties.
- Protect only the identifier.
- Do not make the entire object immutable.
