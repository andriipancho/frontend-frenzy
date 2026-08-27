# TS-NAR-057 — Model payment states

Replace the permissive payment object with explicit pending, paid, and failed states.

## Constraints

- Use `status` as the discriminant.
- Require state-specific data.
- Prevent data from leaking into other states.
