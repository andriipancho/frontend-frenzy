# TS-PROD-017 — Index domain errors by code

Transform the supplied production union while preserving its discriminants and branch-specific data.

## Constraints

- Keep the domain union and exported type name.
- Preserve branch correlations and exhaustiveness.
- Do not use any, assertions, or collapse the union into unrelated unions.
