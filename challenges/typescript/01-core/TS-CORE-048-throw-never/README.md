# TS-CORE-048 — Type a throwing function

Give `fail` the return type that communicates it cannot complete normally.

## Constraints

- Keep the thrown error.
- Do not add a reachable return.
- Use the most precise return type.
