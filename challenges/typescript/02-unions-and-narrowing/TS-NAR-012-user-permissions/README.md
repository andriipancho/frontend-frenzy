# TS-NAR-012 — Combine user and permissions

`UserWithPermissions` describes a user that also carries its permission list.
Build it from the existing `User` and `Permissions` contracts rather than
restating their properties.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Require every property of both contracts at the same time.
- Build `UserWithPermissions` as an intersection type of `User` and
  `Permissions`. One merged object type restating their properties is a
  different type here and is rejected, even though it accepts the same values.
