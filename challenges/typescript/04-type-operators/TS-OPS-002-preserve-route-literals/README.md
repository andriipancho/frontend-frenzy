# TS-OPS-002 — Preserve route literals

Define `routes` so every route is checked against the route contract while exact method and path literals remain available to consumers.

## Constraints

- Valid methods are `GET` and `POST`.
- Every route requires a leading-slash path.
- Keep the object deeply readonly without manually declaring its full type.
