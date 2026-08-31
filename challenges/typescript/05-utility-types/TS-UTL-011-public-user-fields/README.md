# TS-UTL-011 — Select public user fields

Derive the user shape safe to expose in a public response.

## Constraints

- Include only id, name, and avatar URL.
- Do not repeat property types.
- Keep `User` as the source of truth.
