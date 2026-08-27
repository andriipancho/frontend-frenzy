# TS-NAR-059 — Model form field variants

Represent text, checkbox, and select fields with properties valid for each field kind.

## Constraints

- Use `type` as the discriminant.
- Require options only for selects.
- Keep checkbox values boolean and text values string.
