# TS-NAR-003 — Model an API result

Redesign `ApiResult<T>` so success always contains `data` and no error, while
failure always contains `error` and no data. Callers must be able to narrow by
`status`.

## Constraints

- Keep the `success` and `error` status values.
- Do not make required state-specific values optional.
- Rule the foreign field out in each member — `error?: never` on success,
  `data?: never` on failure — so a mixed object cannot be assigned.
