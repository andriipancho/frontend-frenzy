# TS-CORE-050 — Type an unreachable branch

Constrain `unreachable` so it can only receive a value that TypeScript has already reduced to an impossible state.

## Constraints

- Keep the throwing implementation.
- Do not accept ordinary runtime values.
- Keep the return type `never`.
