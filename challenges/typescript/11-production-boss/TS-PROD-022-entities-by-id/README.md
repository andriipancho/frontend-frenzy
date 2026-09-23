# TS-PROD-022 — Normalize an entity union by kind

Transform the supplied production union while preserving its discriminants and branch-specific data.

## Constraints

- Keep the domain union and exported type name.
- Preserve branch correlations and exhaustiveness.
- Do not use any, assertions, or collapse the union into unrelated unions.

## Contract

- Each member's `kind` becomes a key of the map.
- Its value is a `Record<string, …>` of that member with the `kind` discriminant removed —
  the entities of that kind stored by id.
