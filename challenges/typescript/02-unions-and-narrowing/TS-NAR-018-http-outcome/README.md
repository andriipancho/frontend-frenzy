# TS-NAR-018 — Constrain HTTP outcome groups

The client only ever observes five status codes: `200`, `201`, `400`, `404`, and
`500`. Restrict `HttpOutcome` to them so any other code is rejected.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept only those five codes, as numeric literals.
