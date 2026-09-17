# TS-NAR-013 — Combine named and tagged contracts

A release entity must satisfy the `Named` and `Tagged` contracts at the same
time.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Build `TaggedEntity` from both contracts instead of restating their properties.
