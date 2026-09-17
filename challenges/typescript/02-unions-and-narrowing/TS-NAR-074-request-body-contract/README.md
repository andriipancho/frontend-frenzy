# TS-NAR-074 — Model request body contracts

Model the three methods so their parameters cannot be mixed: `GET` takes neither
a body nor an id, `POST` requires `body` (the existing JSON object type), and
`DELETE` requires `id: string`.

## Constraints

- Use `method` as the discriminant.
- Keep the existing `body` and `id` types.
- Rule out the parameters a method does not take with `?: never`, in every
  member, including `GET`.
