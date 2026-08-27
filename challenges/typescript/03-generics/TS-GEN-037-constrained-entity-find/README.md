# TS-GEN-037 — Preserve entities in lookup

Make `findEntity` require string IDs while preserving the array's full entity model.

## Constraints

- Accept readonly arrays.
- Require a string id.
- Return the exact entity type or undefined.
