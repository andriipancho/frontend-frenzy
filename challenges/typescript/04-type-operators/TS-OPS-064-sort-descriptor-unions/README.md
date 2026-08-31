# TS-OPS-064 — Derive sort descriptor unions

Derive valid sort fields and directions from a readonly descriptor catalog.

## Constraints

- Keep field and direction paired in runtime tuples.
- Do not repeat either value set.
- Preserve all exact literals.
