# TS-PROD-021 — Create audit event envelopes

Transform the supplied production union while preserving its discriminants and branch-specific data.

## Constraints

- Keep the domain union and exported type name.
- Preserve branch correlations and exhaustiveness.
- Do not use any, assertions, or collapse the union into unrelated unions.

## Contract

- Each member is intersected, one at a time, with an envelope carrying readonly `occurredAt`,
  a `Date`, and readonly `actorId`, a `string`.
- The result stays a union of envelopes, one per member.
