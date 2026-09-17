# TS-NAR-057 — Model payment states

Replace the permissive payment object with explicit `pending`, `paid`, and
`failed` states: `paid` carries `receiptId: string`, `failed` carries
`error: string`, and `pending` carries neither.

## Constraints

- Use `status` as the discriminant.
- Require state-specific data.
- Rule out the fields a state does not use with `?: never`, in every member,
  including `pending`.
