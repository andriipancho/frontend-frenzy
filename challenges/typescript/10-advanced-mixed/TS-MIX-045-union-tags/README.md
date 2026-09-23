# TS-MIX-045 — Infer mixed discriminants

Implement `UnionTags` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- The discriminant is the `type` property, and the result is the union of its values across
  the members that carry one.
- A member discriminated by any other key contributes nothing.
