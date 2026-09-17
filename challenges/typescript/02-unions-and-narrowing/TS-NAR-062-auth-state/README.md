# TS-NAR-062 — Model authentication states

Separate the four states: `anonymous` and `authenticating` carry no data,
`authenticated` carries `user: { id: string }`, and `rejected` carries
`error: string`.

## Constraints

- Use `status` as the discriminant.
- Give each member only the fields listed for it; no `?: never` placeholders.
- Require user data only after authentication and an error only for rejection.
