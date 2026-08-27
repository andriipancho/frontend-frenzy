# TS-NAR-001 — Make area exhaustive

Complete `area` for every `Shape` variant while preserving exhaustive checking when future variants are added.

## Constraints

- Keep the discriminated union and `assertNever`.
- Do not add a broad default result.
- Return a number for every current shape.
