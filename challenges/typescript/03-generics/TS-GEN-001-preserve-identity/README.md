# TS-GEN-001 — Preserve identity

Change `identity` so its return type preserves the specific type supplied by each caller.

## Constraints

- Keep one implementation for every input type.
- Do not use `any`, overloads, or assertions.
- Preserve literal types when the caller supplies them.
