# TS-NAR-011 — Combine audit fields

Creation and update times are maintained as two separate contracts: the existing
`{ createdAt: Date }` and an update contract `{ updatedAt: Date }`. `AuditFields`
must require both at the same time.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Combine the two contracts instead of declaring one merged object type.
