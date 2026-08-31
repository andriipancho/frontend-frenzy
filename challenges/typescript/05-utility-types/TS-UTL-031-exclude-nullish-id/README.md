# TS-UTL-031 — Exclude nullish IDs

Derive an ID type that excludes both nullish members from an existing union.

## Constraints

- Keep string and number IDs.
- Remove both null and undefined.
- Do not rebuild the retained union manually.
