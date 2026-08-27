# TS-CORE-033 — Protect an array property

Model `Snapshot.tags` so neither the property reference nor the exposed array contents can be mutated.

## Constraints

- Keep tags as a variable-length string collection.
- Prevent property reassignment.
- Prevent array mutation.
