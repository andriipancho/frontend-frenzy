# TS-CORE-046 — Protect a boxed unknown value

Change `UnknownBox` so it stores arbitrary data while forcing consumers to inspect the value before use.

## Constraints

- Keep the object shape and property name.
- Allow every value.
- Do not use `any`.
