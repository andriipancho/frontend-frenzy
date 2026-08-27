# TS-GEN-034 — Parameterize a state store

Connect state reads and writes through the store's selected state type.

## Constraints

- Get returns TState.
- Set accepts TState.
- Do not widen either method.
