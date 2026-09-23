# TS-PROD-016 — Extract successful response data

Transform the supplied production union while preserving its discriminants and branch-specific data.

## Constraints

- Keep the domain union and exported type name.
- Preserve branch correlations and exhaustiveness.
- Do not use any, assertions, or collapse the union into unrelated unions.

## Contract

- The result is the union of the `data` payloads of the members whose `ok` is `true`.
- Failure members contribute nothing.
