# TS-NAR-051 — Guard an identified value

Expose a guard for unknown values containing a string `id` property.

## Constraints

- Keep the input unknown.
- Validate object presence, key presence, and property type.
- Do not use assertions or `any`.
