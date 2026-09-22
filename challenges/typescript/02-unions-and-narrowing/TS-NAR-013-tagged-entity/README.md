# TS-NAR-013 — Combine named and tagged contracts

A release entity must satisfy the `Named` and `Tagged` contracts at the same
time.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Build `TaggedEntity` as an intersection type of `Named` and `Tagged`. One
  merged object type restating their properties is a different type here and is
  rejected, even though it accepts the same values.
