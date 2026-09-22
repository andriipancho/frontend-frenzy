# TS-NAR-011 — Combine audit fields

Creation and update times are maintained as two separate contracts: the existing
`{ createdAt: Date }` and an update contract `{ updatedAt: Date }`. `AuditFields`
must require both at the same time.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Build `AuditFields` as an intersection type of the two contracts. One merged
  object type listing both properties is a different type here and is rejected,
  even though it accepts the same values.
